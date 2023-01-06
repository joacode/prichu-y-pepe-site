import { Message, toaster } from 'rsuite'
import React from 'react'

export const updateRecordMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Record updated successfully
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Couldn't update record
                </Message>
            )
            break
        }

        default:
            break
    }
}

export const fetchRecordMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Record updated successfully
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    There was an error fetching the records
                </Message>
            )
            break
        }

        default:
            break
    }
}

export const addRecordMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Record added successfully
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    There was an error adding the record
                </Message>
            )
            break
        }

        default:
            break
    }
}

export const deleteRecordMessage = (p: string): void => {
    switch (p) {
        case 'success': {
            toaster.push(
                <Message type="success" showIcon>
                    Record deleted successfully
                </Message>
            )
            break
        }

        case 'error': {
            toaster.push(
                <Message type="error" showIcon>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    There was an error deleting the record
                </Message>
            )
            break
        }

        default:
            break
    }
}
