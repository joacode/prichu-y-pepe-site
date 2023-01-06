/* eslint-disable */
import React, {FC, ReactElement, useContext, useEffect, useState} from 'react'
import {Grid as RSGrid, Message, Table, toaster} from 'rsuite'
import {RecordInterface} from 'src/models/record'
import {RecordsService} from 'src/services/recordsService'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import VisibleIcon from '@rsuite/icons/Visible'
import CloseIcon from '@rsuite/icons/Close'
import EditIcon from '@rsuite/icons/Edit';
import {Loading} from './UI/Layout/Loading'
import RecordsActions from './UI/RecordsActions'
import DeleteRecordModal from './Modals/DeleteRecordModal'
import {addRecordMessage} from './UI/message'
import {dateParser} from "../../utils/dateParser";
import AppContext from "../contexts/AppContext";
import RecordsSummary from './UI/RecordsSummary'

interface GridProps {
    maxWidth?: string
}

const {Column, HeaderCell, Cell} = Table

const Container = styled.div``

const Grid = styled(RSGrid)<GridProps>`
  width: fit-content;
  height: auto;
  overflow: scroll;

  @media (max-width: ${(props): string => props?.maxWidth}) {
    padding: 0;
  }
`

const ActionContainer = styled.span`
  cursor: pointer;
`

const RecordsTable: FC = (): ReactElement => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [records, setRecords] = useState<RecordInterface[]>([])
    const [filteredRecords, setFilteredRecords] = useState<RecordInterface[]>(
        []
    )
    const [showDeleteRecordModal, setShowDeleteRecordModal] = useState(false)
    const [deleteId, setDeleteId] = useState<number>(null)

    const {maxResolutionQuery, windowDimensions} = useContext(AppContext)

    const onRowClick = (id: number, edit?: boolean): void => {
        if (edit) {
            router.push(`/${id}/edit`)
        } else {
            router.push(`/${id}`)
        }
    }

    const onDelete = (recordId: number): void => {
        RecordsService.delete(recordId)
            .then(() => addRecordMessage('success'))
            .catch(() => addRecordMessage('error'))
            .finally(() => {
                router.reload()
            })
    }

    useEffect(() => {
        setLoading(true)
        RecordsService.find()
            .then(response => {
                setRecords(response)
                setFilteredRecords(response)
            })
            .catch(() => {
                toaster.push(
                    <Message type="error">
                        There was an error fetching the records
                    </Message>
                )
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loading label="Fetching records..."/>
    }

    return (
        <Container>
            <RecordsActions
                records={records}
                filteredRecords={filteredRecords}
                setFilteredRecords={setFilteredRecords}
            />
            <RecordsSummary
                records={records}
            />
            <Grid maxWidth={`${maxResolutionQuery}px`}>
                <Table
                    virtualized
                    wordWrap
                    autoHeight
                    width={windowDimensions.width < maxResolutionQuery ? windowDimensions.width : maxResolutionQuery}
                    data={filteredRecords}
                    onRowClick={(rowData): void => {
                        // eslint-disable-next-line no-underscore-dangle
                        onRowClick(rowData._id)
                    }}
                >
                    <Column fixed>
                        <HeaderCell>Title</HeaderCell>
                        <Cell dataKey="title"/>
                    </Column>

                    <Column width={150}>
                        <HeaderCell>Detail</HeaderCell>
                        <Cell dataKey="detail"/>
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Amount</HeaderCell>
                        <Cell dataKey="amount"/>
                    </Column>

                    <Column width={60}>
                        <HeaderCell>Type</HeaderCell>
                        <Cell dataKey="type"/>
                    </Column>

                    <Column width={90}>
                        <HeaderCell>Date</HeaderCell>
                        <Cell dataKey="date">
                            {(rowData): ReactElement => {
                                return (
                                    <>
                                        {
                                            rowData?.date && (
                                                dateParser(rowData?.date)
                                            )
                                        }
                                    </>
                                )
                            }}
                        </Cell>
                    </Column>

                    <Column fixed="right">
                        <HeaderCell>Actions</HeaderCell>
                        <Cell>
                            {(rowData): ReactElement => (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <ActionContainer
                                        onClick={(
                                            e: React.MouseEvent
                                        ): void => {
                                            e.stopPropagation()
                                            // eslint-disable-next-line no-underscore-dangle
                                            onRowClick(rowData._id)
                                        }}
                                    >
                                        <VisibleIcon/>
                                    </ActionContainer>
                                    <ActionContainer
                                        onClick={(
                                            e: React.MouseEvent
                                        ): void => {
                                            e.stopPropagation()
                                            // eslint-disable-next-line no-underscore-dangle
                                            onRowClick(rowData._id, true)
                                        }}
                                    >
                                        <EditIcon/>
                                    </ActionContainer>
                                    <ActionContainer
                                        onClick={(
                                            e: React.MouseEvent
                                        ): void => {
                                            e.stopPropagation()
                                            // eslint-disable-next-line no-underscore-dangle
                                            setDeleteId(rowData._id)
                                            setShowDeleteRecordModal(true)
                                        }}
                                    >
                                        <CloseIcon/>
                                    </ActionContainer>
                                </div>
                            )}
                        </Cell>
                    </Column>
                </Table>
            </Grid>
            {showDeleteRecordModal && (
                <DeleteRecordModal
                    open={showDeleteRecordModal}
                    onClose={(): void => setShowDeleteRecordModal(false)}
                    onSubmit={(): void => onDelete(deleteId)}
                />
            )}
        </Container>
    )
}

export default RecordsTable
