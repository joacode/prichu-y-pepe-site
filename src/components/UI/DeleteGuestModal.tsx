import React, { FC, ReactElement } from 'react'
import { Modal } from 'rsuite'
import { theme } from 'styles/theme'
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
                <div style={{ display: 'flex' }}>
                    <Button
                        style={{ background: theme.colors.white.normal }}
                        appearance="ghost"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        style={{
                            background: theme.colors.pink,
                        }}
                        appearance="primary"
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteGuestModal
