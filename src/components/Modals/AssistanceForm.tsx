import React, { FC, ReactElement, useContext, useState } from 'react'
import { DatePicker, Modal } from 'rsuite'
import styled from 'styled-components'
import Button from '../UI/Button'
import ItemDetail from '../UI/ItemDetail'
import InputItem from '../UI/InputItem'
import { GuestInterface } from '../../models/guest'
import AppContext from '../../contexts/AppContext'
import { ItemContainer } from '../RecordDetail'
import Box from '../UI/Box'

const Container = styled.div`
    width: 100%;
`

const AssistanceForm: FC = (): ReactElement => {
    const { maxResolutionQuery } = useContext(AppContext)
    const [guest, setGuest] = useState<GuestInterface>()

    const nameChange = (value: string): void => {
        setGuest(prevState => ({
            ...prevState,
            name: value,
        }))
    }

    const assistanceChange = (value: string): void => {
        setGuest(prevState => ({
            ...prevState,
            assistance: value,
        }))
    }

    const menuSelect = (value: string): void => {
        console.log('select')
        // setGuest(prevState => ({
        //     ...prevState,
        //     menu: value,
        // }))
    }

    return (
        <Box
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
            }}
        >
            <Container>
                <InputItem
                    style={{ marginTop: 0, paddingTop: 0 }}
                    label="Nombre:"
                    onChange={nameChange}
                    edit
                />
                <InputItem
                    label="Asistencia:"
                    onChange={assistanceChange}
                    edit
                />
                <InputItem label="Menu especial:" onChange={menuSelect} edit />
                {/* <ItemContainer
                    maxWidth={`${maxResolutionQuery}px`}
                    style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        borderBottom: 'none',
                    }}
                >
                    <ItemDetail bolder>Date:</ItemDetail>
                    <DatePicker
                        placeholder="Select Date"
                        onSelect={dateChange}
                        oneTap
                        format="yyyy-MM-dd"
                        style={{ width: '100%' }}
                    />
                </ItemContainer> */}
            </Container>
            <div>
                <Button
                    appearance="ghost"
                    onClick={(): void => console.log('close')}
                >
                    Cancel
                </Button>
                <Button
                    appearance="primary"
                    onClick={(): void => console.log(guest)}
                >
                    Submit
                </Button>
            </div>
        </Box>
    )
}

export default AssistanceForm
