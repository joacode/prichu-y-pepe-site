import React, { FC, ReactElement } from 'react'
import { Modal } from 'rsuite'
import Button from './Button'

interface Props {
    open: boolean
    onClose: () => void
    onSubmit: () => void
}

const DeleteGuestModal: FC<Props> = ({
    open,
    onClose,
    onSubmit,
}): ReactElement => {
    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>Delete Guest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this guest? This action cannot
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

export default DeleteGuestModal
