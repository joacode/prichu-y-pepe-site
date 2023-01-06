import React, { FC, ReactElement, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import RecordsFilter from './RecordsFilter'
import Button from './Button'
import Box from './Box'
import AddRecordModal from '../Modals/AddRecordModal'
import { RecordsService } from '../../services/recordsService'
import { addRecordMessage } from './message'
import { RecordInterface } from '../../models/record'
import AppContext from '../../contexts/AppContext'
import FilterPopUp from './FilterPopUp'

interface Props {
    records: RecordInterface[]
    filteredRecords: RecordInterface[]
    setFilteredRecords: (r: RecordInterface[]) => void
}

const RecordsActions: FC<Props> = ({
    records,
    filteredRecords,
    setFilteredRecords,
}): ReactElement => {
    const router = useRouter()
    const [record, setRecord] = useState<RecordInterface>(null)
    const [showAddRecordModal, setShowAddRecordModal] = useState(false)

    const { windowDimensions, maxResolutionQuery } = useContext(AppContext)

    const checkAndSubmit = (): void => {
        if (record.title !== '' && !Number.isNaN(record.amount)) {
            RecordsService.create(record)
                .then(() => addRecordMessage('success'))
                .catch(() => addRecordMessage('error'))
                .finally(() => {
                    router.reload()
                })
        }
    }

    return (
        <Box>
            {windowDimensions.width > maxResolutionQuery ? (
                <RecordsFilter
                    records={records}
                    filteredRecords={filteredRecords}
                    setFilteredRecords={setFilteredRecords}
                />
            ) : (
                <FilterPopUp
                    records={records}
                    filteredRecords={filteredRecords}
                    setFilteredRecords={setFilteredRecords}
                />
            )}
            <Button
                appearance="primary"
                style={{
                    margin: '10px',
                    width: `${
                        windowDimensions.width < maxResolutionQuery
                            ? '-webkit-fill-available'
                            : 98
                    }`,
                    height: 36,
                }}
                onClick={(): void => setShowAddRecordModal(true)}
            >
                Add Record
            </Button>
            {showAddRecordModal && (
                <AddRecordModal
                    open={showAddRecordModal}
                    onClose={(): void => setShowAddRecordModal(false)}
                    onSubmit={(): void => checkAndSubmit()}
                    setRecord={setRecord}
                />
            )}
        </Box>
    )
}

export default RecordsActions
