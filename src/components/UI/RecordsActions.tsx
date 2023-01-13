import React, { FC, ReactElement, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import GuestsFilter from './GuestsFilter'
import Button from './Button'
import Box from './Box'
import AddRecordModal from '../Modals/AddRecordModal'
import { GuestsService } from '../../services/guestsService'
import { addRecordMessage } from './message'
import { RecordInterface } from '../../models/guest'
import AppContext from '../../contexts/AppContext'
import FilterPopUp from './FilterPopUp'

interface Props {
    records: RecordInterface[]
    filteredGuests: RecordInterface[]
    setFilteredGuests: (r: RecordInterface[]) => void
}

const GuestsActions: FC<Props> = ({
    records,
    filteredGuests,
    setFilteredGuests,
}): ReactElement => {
    const router = useRouter()
    const [record, setRecord] = useState<RecordInterface>(null)
    const [showAddRecordModal, setShowAddRecordModal] = useState(false)

    const checkAndSubmit = (): void => {
        if (record.title !== '' && !Number.isNaN(record.amount)) {
            GuestsService.create(record)
                .then(() => addRecordMessage('success'))
                .catch(() => addRecordMessage('error'))
                .finally(() => {
                    router.reload()
                })
        }
    }

    return (
        <Box>
            <GuestsFilter
                records={records}
                filteredGuests={filteredGuests}
                setFilteredGuests={setFilteredGuests}
            />
            <Button
                appearance="primary"
                style={{
                    margin: '10px',
                    width: 98,
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

export default GuestsActions
