import React, { FC, ReactElement, useState } from 'react'
import { Input as RSInput } from 'rsuite'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { CivilAssistance, PartyAssistance } from 'src/models/assistance'
import { SpecialMenu } from 'src/models/specialMenu'
import Button from './Button'
import { GuestFilter, GuestInterface } from '../../models/guest'
import InputItem from './InputItem'

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

const Input = styled(RSInput)<Props>`
    width: 100px;
    display: inline-block;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: flex;
        width: 100%;
    }
`

interface GuestsFilterProps {
    guests: GuestInterface[]
    filteredGuests: GuestInterface[]
    setfilteredGuests: (g: GuestInterface[]) => void
    popUp?: boolean
    setOpenPopUp?: (p: boolean) => void
}

const civilAssistanceData = [
    {
        label: 'Voy a la ceremonia y al festejo',
        value: CivilAssistance.ALL,
    },
    { label: 'Voy solo a la ceremonia', value: CivilAssistance.CEREMONY },
    { label: 'Voy solo al festejo', value: CivilAssistance.PARTY },
    { label: 'No voy a poder ir', value: CivilAssistance.DONT },
]

const partyAssistanceData = [
    {
        label: 'Voy a la ceremonia y al festejo',
        value: PartyAssistance.ALL,
    },
    { label: 'Voy solo a la ceremonia', value: PartyAssistance.CEREMONY },
    { label: 'No voy a poder ir', value: PartyAssistance.DONT },
]

const specialMenu = [
    { label: '¡Como de todo!', value: SpecialMenu.DEFAULT },
    { label: 'Sin TACC', value: SpecialMenu.COELIAC },
    { label: 'Go Vegan!', value: SpecialMenu.VEGAN },
    { label: 'Veggie Baby', value: SpecialMenu.VEGGIE },
]

const GuestsFilter: FC<GuestsFilterProps> = ({
    guests,
    filteredGuests,
    setfilteredGuests,
    popUp,
    setOpenPopUp,
}): ReactElement => {
    const [filters, setFilters] = useState<GuestFilter>(undefined)

    const onChangeNameFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, name: value }))
    }

    const onChangeLastNameFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, lastName: value }))
    }

    const onChangeCivilAssistanceFilter = (value: CivilAssistance): void => {
        setFilters(prevState => ({ ...prevState, civilAssistance: value }))
    }

    const onChangePartyAssistanceFilter = (value: PartyAssistance): void => {
        setFilters(prevState => ({ ...prevState, partyAssistance: value }))
    }

    const onChangeSpecialMenuFilter = (value: SpecialMenu): void => {
        setFilters(prevState => ({ ...prevState, menu: value }))
    }

    const filterGuests = (): void => {
        let fGuests = filteredGuests

        if (filters?.name) {
            fGuests = fGuests.filter(g => g.name === filters.name)
        }
        if (filters?.lastName) {
            fGuests = fGuests.filter(g => g.lastName === filters.lastName)
        }
        if (filters?.civilAssistance) {
            fGuests = fGuests.filter(
                g => g.civilAssistance === filters.civilAssistance
            )
        }
        if (filters?.partyAssistance) {
            fGuests = fGuests.filter(
                g => g.partyAssistance === filters.partyAssistance
            )
        }
        if (filters?.menu) {
            fGuests = fGuests.filter(g => g.menu === filters.menu)
        }

        setfilteredGuests(fGuests)

        if (popUp) {
            setOpenPopUp(false)
        }
    }

    const clearFilters = (): void => {
        setfilteredGuests(guests)
        setFilters(null)

        if (popUp) {
            setOpenPopUp(false)
        }
    }

    return (
        <FilterContainer maxWidth="100%" popUp={popUp}>
            <Container>
                <span>Name: </span>
                <Input maxWidth="100%" onChange={onChangeNameFilter} />
            </Container>
            <Container>
                <span>Last Name: </span>
                <Input maxWidth="100%" onChange={onChangeLastNameFilter} />
            </Container>
            <InputItem
                label="Confirmar asistencia al Civil"
                onChange={onChangeCivilAssistanceFilter}
                select
                placeholder="Asistencia 16 de Febrero"
                data={civilAssistanceData}
            />
            <InputItem
                label="Confirmar asistencia a la Iglesia y Fiesta"
                onChange={onChangePartyAssistanceFilter}
                select
                placeholder="Asistencia 25 de Febrero"
                data={partyAssistanceData}
            />
            <InputItem
                label="Menu"
                onChange={onChangeSpecialMenuFilter}
                select
                placeholder="Selecciona tu menu"
                data={specialMenu}
            />
            <Button
                appearance="primary"
                style={{
                    margin: '10px',
                    width: 55,
                    height: 36,
                }}
                onClick={filterGuests}
            >
                {popUp ? 'Apply' : 'Filter'}
            </Button>
            <Button
                appearance="ghost"
                style={{
                    margin: '10px',
                    width: 100,
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

export default GuestsFilter

GuestsFilter.defaultProps = {
    popUp: false,
    setOpenPopUp: noop,
}
