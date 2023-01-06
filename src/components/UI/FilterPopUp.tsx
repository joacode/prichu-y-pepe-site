import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { RecordInterface } from '../../models/record'
import RecordsFilter from './RecordsFilter'
import Button from './Button'

const Container = styled.div``

interface FilterPopUpProps {
    records: RecordInterface[]
    filteredRecords: RecordInterface[]
    setFilteredRecords: (r: RecordInterface[]) => void
}

const FilterPopUp: FC<FilterPopUpProps> = ({
    records,
    filteredRecords,
    setFilteredRecords,
}): ReactElement => {
    const [openPopUp, setOpenPopUp] = useState(false)

    return (
        <Container>
            <Button
                appearance="ghost"
                style={{
                    margin: '10px',
                    width: '-webkit-fill-available',
                    height: 36,
                }}
                onClick={(): void => setOpenPopUp(!openPopUp)}
            >
                Filters
            </Button>
            {openPopUp && (
                <RecordsFilter
                    records={records}
                    filteredRecords={filteredRecords}
                    setFilteredRecords={setFilteredRecords}
                    popUp
                    setOpenPopUp={setOpenPopUp}
                />
            )}
        </Container>
    )
}

export default FilterPopUp
