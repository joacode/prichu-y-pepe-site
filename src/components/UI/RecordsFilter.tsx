import React, { FC, ReactElement, useContext, useState } from 'react'
import { DatePicker as RSDatePicker, Input as RSInput } from 'rsuite'
import styled from 'styled-components'
import noop from 'lodash/noop'
import Button from './Button'
import { RecordFilter, RecordInterface } from '../../models/record'
import AppContext from '../../contexts/AppContext'

interface Props {
    maxWidth?: string
    popUp?: boolean
}

const Container = styled.div`
    margin: 10px;
    display: inline-block;
`

const FilterContainer = styled.div<Props>`
    display: inherit;
    position: ${(props): string => {
        if (props?.popUp) {
            return 'absolute'
        }
    }};
    background: ${(props): string => {
        if (props?.popUp) {
            return 'white'
        }
    }};
    z-index: ${(props): number => {
        if (props?.popUp) {
            return 10
        }
    }};
    width: ${(props): string => {
        if (props?.popUp) {
            return 'min-content'
        }
    }};
    border: ${(props): string => {
        if (props?.popUp) {
            return '1px solid #045cb5'
        }
    }};
    border-radius: ${(props): string => {
        if (props?.popUp) {
            return '10px'
        }
    }};
    padding: ${(props): string => {
        if (props?.popUp) {
            return '10px 20px'
        }
    }};

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: block;
    }
`

const DatePicker = styled(RSDatePicker)<Props>`
    width: 170px;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: block;
    }
`

const Input = styled(RSInput)<Props>`
    width: 100px;
    display: inline-block;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: flex;
        width: 100%;
    }
`

interface RecordsFilterProps {
    records: RecordInterface[]
    filteredRecords: RecordInterface[]
    setFilteredRecords: (r: RecordInterface[]) => void
    popUp?: boolean
    setOpenPopUp?: (p: boolean) => void
}

const RecordsFilter: FC<RecordsFilterProps> = ({
    records,
    filteredRecords,
    setFilteredRecords,
    popUp,
    setOpenPopUp,
}): ReactElement => {
    const [filters, setFilters] = useState<RecordFilter>(undefined)

    const { windowDimensions, maxResolutionQuery } = useContext(AppContext)

    const onChangeTitleFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, title: value }))
    }

    const onChangeAmountFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, amount: parseFloat(value) }))
    }

    const onChangeDateFilter = (date: Date): void => {
        setFilters(prevState => ({ ...prevState, date: date.toString() }))
    }

    const filterRecords = (): void => {
        let fRecords = filteredRecords

        if (filters?.title) {
            fRecords = fRecords.filter(r => r.title === filters.title)
        }
        if (filters?.amount) {
            fRecords = fRecords.filter(r => r.amount === filters.amount)
        }
        if (filters?.date) {
            fRecords = fRecords.filter(r => r.date === filters.date)
        }

        setFilteredRecords(fRecords)

        if (popUp) {
            setOpenPopUp(false)
        }
    }

    const clearFilters = (): void => {
        setFilteredRecords(records)
        setFilters(null)

        if (popUp) {
            setOpenPopUp(false)
        }
    }

    return (
        <FilterContainer maxWidth={`${maxResolutionQuery}px`} popUp={popUp}>
            <Container>
                <span>Title: </span>
                <Input
                    maxWidth={`${maxResolutionQuery}px`}
                    onChange={onChangeTitleFilter}
                />
            </Container>
            <Container>
                <span>Amount: </span>
                <Input
                    maxWidth={`${maxResolutionQuery}px`}
                    onChange={onChangeAmountFilter}
                />
            </Container>
            <Container>
                <span>Date: </span>
                <DatePicker
                    onSelect={onChangeDateFilter}
                    oneTap
                    format="yyyy-MM-dd"
                    placeholder="Select Date:"
                    maxWidth={`${maxResolutionQuery}px`}
                />
            </Container>
            <Button
                appearance="primary"
                style={{
                    margin: '10px',
                    width: `${
                        windowDimensions.width < maxResolutionQuery
                            ? '-webkit-fill-available'
                            : 55
                    }`,
                    height: 36,
                }}
                onClick={filterRecords}
            >
                {popUp ? 'Apply' : 'Filter'}
            </Button>
            <Button
                appearance="ghost"
                style={{
                    margin: '10px',
                    width: `${
                        windowDimensions.width < maxResolutionQuery
                            ? '-webkit-fill-available'
                            : 100
                    }`,
                    height: 36,
                }}
                onClick={clearFilters}
            >
                {popUp ? 'Clear' : 'Clear Filters'}
            </Button>
            {popUp && (
                <Button
                    appearance="ghost"
                    style={{
                        margin: '10px',
                        width: '-webkit-fill-available',
                        height: 36,
                    }}
                    onClick={(): void => setOpenPopUp(false)}
                >
                    Cancel
                </Button>
            )}
        </FilterContainer>
    )
}

export default RecordsFilter

RecordsFilter.defaultProps = {
    popUp: false,
    setOpenPopUp: noop,
}
