import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { CivilAssistance, PartyAssistance } from 'src/models/assistance'
import { SpecialMenu } from 'src/models/specialMenu'
import { useRouter } from 'next/router'
import { theme } from 'styles/theme'
import Button from './Button'
import { ChangeGuest, GuestFilter, GuestInterface } from '../../models/guest'
import InputItem from './InputItem'
import SelectItem from './SelectItem'

const StyledButton = styled(Button)`
    width: 100px;
    margin-bottom: 10px !important;
`

const Container = styled.div`
    margin: 10px;
    display: inline-block;
`

const FilterContainer = styled.div`
    display: flex;
`

interface GuestsFilterProps {
    filteredGuests: GuestInterface[]
    setFilteredGuests: (g: GuestInterface[]) => void
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
    filteredGuests,
    setFilteredGuests,
}): ReactElement => {
    const router = useRouter()
    const [filters, setFilters] = useState<GuestFilter>(undefined)

    const changeFilter = (
        key: ChangeGuest['key'],
        value: ChangeGuest['value']
    ): void => {
        setFilters(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const filterGuests = (): void => {
        let fGuests = filteredGuests

        if (filters?.name) {
            fGuests = fGuests.filter(g => g.name.includes(filters.name))
        }
        if (filters?.lastName) {
            fGuests = fGuests.filter(g => g.lastName.includes(filters.lastName))
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

        setFilteredGuests(fGuests)
    }

    return (
        <FilterContainer maxWidth="100%">
            <Container>
                <InputItem
                    label="Name"
                    onChange={changeFilter}
                    placeholder="Name"
                    keyName="name"
                />
            </Container>
            <Container>
                <InputItem
                    label="Last Name"
                    onChange={changeFilter}
                    placeholder="Last Name"
                    keyName="lastName"
                />
            </Container>
            <Container>
                <SelectItem
                    label="Asistencia al Civil"
                    onChange={changeFilter}
                    placeholder="Asistencia 16 de Febrero"
                    data={civilAssistanceData}
                    keyName="civilAssistance"
                />
            </Container>
            <Container>
                <SelectItem
                    label="Asistencia a la Iglesia y Fiesta"
                    onChange={changeFilter}
                    placeholder="Asistencia 25 de Febrero"
                    data={partyAssistanceData}
                    keyName="partyAssistance"
                />
            </Container>
            <Container>
                <SelectItem
                    label="Menu"
                    onChange={changeFilter}
                    placeholder="Menu"
                    data={specialMenu}
                    keyName="menu"
                />
            </Container>
            <Container>
                <StyledButton
                    style={{ marginBottom: 10, background: theme.colors.pink }}
                    appearance="primary"
                    onClick={filterGuests}
                >
                    Apply
                </StyledButton>
                <StyledButton
                    style={{ background: theme.colors.white.normal }}
                    appearance="ghost"
                    onClick={router.reload}
                >
                    Clear
                </StyledButton>
            </Container>
        </FilterContainer>
    )
}

export default GuestsFilter
