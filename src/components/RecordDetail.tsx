import React, { FC, ReactElement, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { DatePicker, Grid as StyledGrid } from 'rsuite'
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from '@rsuite/icons/Edit'
import { dateParser } from 'utils/dateParser'
import { RecordsService } from '../services/recordsService'
import { RecordInterface, RecordUpdateRequest } from '../models/record'
import Button from './UI/Button'
import { Loading } from './UI/Layout/Loading'
import { fetchRecordMessage, updateRecordMessage } from './UI/message'
import Title from './UI/Title'
import ItemDetail from './UI/ItemDetail'
import Box from './UI/Box'
import InputItem from './UI/InputItem'
import AppContext from '../contexts/AppContext'

export interface MediaProps {
    maxWidth?: string
}

const Grid = styled(StyledGrid)<MediaProps>`
    width: 400px;
    height: 100%;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        width: 100%;
        margin: 0;
    }
`

export const ItemContainer = styled.div<MediaProps>`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        padding: 20px 0;
        margin: 20px 0;
        width: 100%;
    }
`

const ButtonContainer = styled.div<MediaProps>`
    padding: 10px 0 0 0;
    margin: 10px 0 0 0;
    justify-content: space-evenly;
    display: flex;
    border-bottom: none;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        width: 100%;
    }
`

interface RecordDetailProps {
    edit?: boolean
}

const RecordDetail: FC<RecordDetailProps> = ({
    edit = false,
}): ReactElement => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [record, setRecord] = useState<RecordInterface>(null)

    const { maxResolutionQuery } = useContext(AppContext)

    const handleEdit = (): void => {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        router.push(`/${record._id}/edit`)
    }

    const onCancel = (): void => {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        router.push(`/${record._id}`)
    }

    const titleChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            title: value,
        }))
    }

    const detailChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            detail: value,
        }))
    }

    const amountChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            amount: parseFloat(value),
        }))
    }

    const typeChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            type: value,
        }))
    }

    const dateChange = (date: Date): void => {
        setRecord(prevState => ({
            ...prevState,
            date: date.toString(),
        }))
    }

    const checkAndSubmit = (e: React.MouseEvent): void => {
        e.stopPropagation()
        if (record.title !== '' && !Number.isNaN(record.amount)) {
            setLoading(true)
            RecordsService.update(record as RecordUpdateRequest)
                .then(() => updateRecordMessage('success'))
                .catch(() => updateRecordMessage('error'))
                .finally(() => {
                    setLoading(false)
                    router.push('/records')
                })
        }
    }

    useEffect((): void => {
        setLoading(true)
        RecordsService.findById(router.query.id)
            .then(setRecord)
            .catch(() => fetchRecordMessage('error'))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loading label="Handling request..." />
    }

    return (
        <Box>
            <Grid maxWidth={`${maxResolutionQuery}px`}>
                <Title>
                    <>
                        {record?.title}
                        {!edit && (
                            <EditIcon
                                width="30px"
                                style={{ marginLeft: 20, cursor: 'pointer' }}
                                onClick={handleEdit}
                            />
                        )}
                    </>
                </Title>
                {record && (
                    <>
                        <InputItem
                            label="Title:"
                            onChange={titleChange}
                            defaultValue={record.title}
                            edit={edit}
                        />
                        <InputItem
                            label="Detail:"
                            onChange={detailChange}
                            defaultValue={record.detail}
                            edit={edit}
                        />
                        <InputItem
                            label="Amount:"
                            onChange={amountChange}
                            defaultValue={record.amount}
                            edit={edit}
                        />
                        <InputItem
                            label="Type:"
                            onChange={typeChange}
                            defaultValue={record.type}
                            edit={edit}
                        />
                        <ItemContainer maxWidth={`${maxResolutionQuery}px`}>
                            <ItemDetail bolder>Date:</ItemDetail>
                            {edit ? (
                                <DatePicker
                                    placeholder="Select Date"
                                    style={{ width: 170 }}
                                    onSelect={dateChange}
                                    readOnly={!edit}
                                    oneTap
                                    format="yyyy-MM-dd"
                                />
                            ) : (
                                <ItemDetail>
                                    {dateParser(record.date)}
                                </ItemDetail>
                            )}
                        </ItemContainer>
                        <ButtonContainer maxWidth={`${maxResolutionQuery}px`}>
                            {edit && (
                                <Button appearance="ghost" onClick={onCancel}>
                                    Cancel
                                </Button>
                            )}
                            <Button
                                appearance="primary"
                                color={edit ? 'blue' : 'red'}
                                onClick={(e: React.MouseEvent): void =>
                                    checkAndSubmit(e)
                                }
                            >
                                {edit ? 'Submit' : 'Delete'}
                            </Button>
                        </ButtonContainer>
                    </>
                )}
            </Grid>
        </Box>
    )
}

export default RecordDetail

RecordDetail.defaultProps = {
    edit: false,
}
