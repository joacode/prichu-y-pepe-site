import React, { FC, ReactElement, useContext, useMemo } from 'react'
import Box from './Box'
import { RecordInterface } from '../../models/record'
import ItemDetail from './ItemDetail'
import { ItemContainer } from '../RecordDetail'
import AppContext from '../../contexts/AppContext'

interface RecordsSummaryProps {
    records: RecordInterface[]
}

const RecordsSummary: FC<RecordsSummaryProps> = ({ records }): ReactElement => {
    const { maxResolutionQuery, windowDimensions } = useContext(AppContext)

    const totalAvailable = useMemo((): number => {
        return records
            .filter(record => record.type === 'debit')
            .reduce((a, b) => a + b.amount, 0)
    }, [records])

    const totalSpent = useMemo((): number => {
        return records
            .filter(record => record.type === 'credit')
            .reduce((a, b) => a + b.amount, 0)
    }, [records])

    return (
        <Box
            lessPadding
            fullWidth
            style={{
                width: `${
                    maxResolutionQuery >= windowDimensions.width
                        ? '100%'
                        : 'fit-content'
                }`,
                margin: `${maxResolutionQuery >= windowDimensions.width &&
                    '20px 0'}`,
            }}
        >
            <ItemContainer
                style={{
                    borderBottom: 'none',
                    margin: 0,
                    padding: 0,
                }}
            >
                <ItemDetail bolder>Available</ItemDetail>
                <ItemDetail bolder color="green">
                    $ {totalAvailable}
                </ItemDetail>
                <ItemDetail
                    bolder
                    style={{
                        borderLeft: '0.5px solid #575a5b4d',
                        height: '100%',
                        paddingLeft: 20,
                    }}
                >
                    Spent
                </ItemDetail>
                <ItemDetail bolder color="red">
                    $ {totalSpent}
                </ItemDetail>
            </ItemContainer>
        </Box>
    )
}

export default RecordsSummary
