import React, { FC, ReactElement, useContext } from 'react'
import { DatePicker, Modal } from 'rsuite'
import Button from '../UI/Button'
import ItemDetail from '../UI/ItemDetail'
import InputItem from '../UI/InputItem'
import { RecordInterface } from '../../models/record'
import AppContext from '../../contexts/AppContext'
import { ItemContainer } from '../RecordDetail'

interface AddRecordModalProps {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    setRecord: (prevState: (prevState) => RecordInterface) => void
}

const AddRecordModal: FC<AddRecordModalProps> = ({
    open,
    onClose,
    onSubmit,
    setRecord,
}): ReactElement => {
    const { maxResolutionQuery } = useContext(AppContext)

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

    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>Add record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    <InputItem
                        style={{ marginTop: 0, paddingTop: 0 }}
                        label="Title:"
                        onChange={titleChange}
                        edit
                    />
                    <InputItem label="Detail:" onChange={detailChange} edit />
                    <InputItem label="Amount:" onChange={amountChange} edit />
                    <InputItem label="Type:" onChange={typeChange} edit />
                    <ItemContainer
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
                    </ItemContainer>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button appearance="ghost" onClick={(): void => onClose()}>
                    Cancel
                </Button>
                <Button appearance="primary" onClick={(): void => onSubmit()}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddRecordModal
