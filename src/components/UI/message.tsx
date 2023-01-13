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

export const loginMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Accepted!
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Credenciales incorrectas
                </Message>
            )
            break
        }

        default:
            break
    }
}

export const deleteMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Guest removed succesfully
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    There was a problem removing the guest
                </Message>
            )
            break
        }

        default:
            break
    }
}
