import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Grid, Message, Table, toaster } from 'rsuite'
import { GuestInterface } from 'src/models/guest'
import { GuestsService } from 'src/services/guestsService'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import CloseIcon from '@rsuite/icons/Close'
import DeleteGuestModal from 'src/components/UI/DeleteGuestModal'
import { useRouter } from 'next/router'
import GuestsFilter from 'src/components/UI/GuestsFilter'
import { deleteMessage } from 'src/components/UI/message'
import BannerTitle from 'src/components/UI/BannerTitle'

const { Column, HeaderCell, Cell } = Table

const ActionContainer = styled.span`
    cursor: pointer;
`

const civilAssistanceConfig = {
    ALL: 'Voy a la ceremonia y al festejo',
    CEREMONY: 'Voy solo a la ceremonia',
    PARTY: 'Voy solo al festejo',
    DONT: 'No voy a poder ir',
}

const partyAssistanceConfig = {
    ALL: 'Voy a la ceremonia y al festejo',
    CEREMONY: 'Voy solo a la ceremonia',
    DONT: 'No voy a poder ir',
}

const specialMenuConfig = {
    VEGGIE: 'Vegetariano',
    VEGAN: 'Vegano',
    COELIAC: 'Sin TACC',
    DEFAULT: 'Todo',
}

export enum SpecialMenu {
    VEGGIE = 'VEGGIE',
    VEGAN = 'VEGAN',
    COELIAC = 'COELIAC',
    DEFAULT = 'DEFAULT',
    EMPTY = 'EMPTY',
}

const AdminPage = (): ReactElement => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [filteredGuests, setFilteredGuests] = useState<GuestInterface[]>([])
    const [showDeleteGuestModal, setShowDeleteGuestModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [auth, setAuth] = useState(false)

    const onDelete = useCallback(
        (id: number) => {
            GuestsService.delete(id)
                .then(() => deleteMessage('success'))
                .catch(() => {
                    deleteMessage('error')
                })
                .finally(router.reload)
        },
        [deleteId]
    )

    useEffect(() => {
        const isAuth = sessionStorage.getItem('auth')
        if (isAuth !== 'true') {
            router.push('/admin/login')
        } else {
            setAuth(true)
            setLoading(true)
            GuestsService.find()
                .then(res => {
                    setFilteredGuests(res)
                })
                .catch(() => {
                    toaster.push(
                        <Message type="error">
                            There was an error fetching the data
                        </Message>
                    )
                })
                .finally(() => setLoading(false))
        }
    }, [])

    return (
        auth && (
            <>
                <BannerTitle containerStyle={{ marginTop: 0 }} />
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        justifyContent: 'center',
                        background: theme.colors.background,
                    }}
                >
                    <GuestsFilter
                        filteredGuests={filteredGuests}
                        setfilteredGuests={setFilteredGuests}
                    />
                    <Grid style={{ width: 1300 }}>
                        <Table
                            virtualized
                            wordWrap
                            autoHeight
                            data={filteredGuests}
                            loading={loading}
                        >
                            <Column flexGrow={2}>
                                <HeaderCell>Name</HeaderCell>
                                <Cell dataKey="name" />
                            </Column>
                            <Column flexGrow={2}>
                                <HeaderCell>Last Name</HeaderCell>
                                <Cell dataKey="lastName" />
                            </Column>

                            <Column flexGrow={2.4}>
                                <HeaderCell>Civil assistance</HeaderCell>
                                <Cell dataKey="civilAssistance">
                                    {(rowData): ReactElement => {
                                        return (
                                            <span>
                                                {
                                                    civilAssistanceConfig[
                                                        rowData
                                                            .civilAssistance[0]
                                                    ]
                                                }
                                            </span>
                                        )
                                    }}
                                </Cell>
                            </Column>

                            <Column flexGrow={2.4}>
                                <HeaderCell>Party assistance</HeaderCell>
                                <Cell dataKey="partyAssistance">
                                    {(rowData): ReactElement => {
                                        return (
                                            <span>
                                                {
                                                    partyAssistanceConfig[
                                                        rowData
                                                            .partyAssistance[0]
                                                    ]
                                                }
                                            </span>
                                        )
                                    }}
                                </Cell>
                            </Column>

                            <Column>
                                <HeaderCell>Menu</HeaderCell>
                                <Cell dataKey="menu">
                                    {(rowData): ReactElement => {
                                        return (
                                            <span>
                                                {
                                                    specialMenuConfig[
                                                        rowData.menu[0]
                                                    ]
                                                }
                                            </span>
                                        )
                                    }}
                                </Cell>
                            </Column>

                            <Column flexGrow={3}>
                                <HeaderCell>Song</HeaderCell>
                                <Cell dataKey="song" />
                            </Column>

                            <Column align="center">
                                <HeaderCell>Actions</HeaderCell>
                                <Cell>
                                    {(rowData): ReactElement => (
                                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                            }}
                                        >
                                            <ActionContainer
                                                onClick={(
                                                    e: React.MouseEvent
                                                ): void => {
                                                    e.stopPropagation()
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    setDeleteId(rowData._id)
                                                    setShowDeleteGuestModal(
                                                        true
                                                    )
                                                }}
                                            >
                                                <CloseIcon />
                                            </ActionContainer>
                                        </div>
                                    )}
                                </Cell>
                            </Column>
                        </Table>
                    </Grid>
                    {showDeleteGuestModal && (
                        <DeleteGuestModal
                            open={showDeleteGuestModal}
                            onClose={(): void => setShowDeleteGuestModal(false)}
                            onSubmit={(): void => onDelete(deleteId)}
                        />
                    )}
                </div>
            </>
        )
    )
}

export default AdminPage
