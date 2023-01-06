import React, { FC, ReactElement } from 'react'
import { Modal } from 'rsuite'
import Button from '../UI/Button'

interface Props {
    open: boolean
    onClose: () => void
    onSubmit: () => void
}

const DeleteRecordModal: FC<Props> = ({
    open,
    onClose,
    onSubmit,
}): ReactElement => {
    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>Delete Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this record? This action cannot
                be undone
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

export default DeleteRecordModal
