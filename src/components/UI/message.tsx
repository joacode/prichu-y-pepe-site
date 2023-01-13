import { Message, toaster } from 'rsuite'
import React from 'react'

export const addGuestMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Registrado!
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Por favor completa todos los campos
                </Message>
            )
            break
        }

        default:
            break
    }
}
