import React, {
    FC,
    ReactElement,
    useCallback,
    useContext,
    useState,
} from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { SpecialMenu } from 'src/models/specialMenu'
import { useRouter } from 'next/router'
import { CivilAssistance, PartyAssistance } from 'src/models/assistance'
import { GuestsService } from 'src/services/guestsService'
import SelectItem from './SelectItem'
import Button from './Button'
import InputItem from './InputItem'
import { ChangeGuest, GuestInterface } from '../../models/guest'
import AppContext from '../../contexts/AppContext'
import { addGuestMessage } from './message'

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        margin-bottom: 70px;
    }
`

const UpperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

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

const AssistanceForm: FC = (): ReactElement => {
    const router = useRouter()
    const { windowDimensions } = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [guest, setGuest] = useState<GuestInterface>({
        name: '',
        lastName: '',
        civilAssistance: CivilAssistance.EMPTY,
        partyAssistance: PartyAssistance.EMPTY,
        menu: SpecialMenu.EMPTY,
        song: '',
    })

    const changeGuest = (
        key: ChangeGuest['key'],
        value: ChangeGuest['value']
    ): void => {
        setGuest(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const refetch = useCallback(() => {
        setTimeout(router.reload, 3000)
    }, [])

    const onSubmit = useCallback(() => {
        if (
            guest?.name !== '' &&
            guest?.lastName !== '' &&
            guest?.civilAssistance !== CivilAssistance.EMPTY &&
            guest?.partyAssistance !== PartyAssistance.EMPTY &&
            guest?.menu !== SpecialMenu.EMPTY
        ) {
            setLoading(true)
            GuestsService.create({ ...guest, active: true })
                .then(() => {
                    addGuestMessage('success')
                    sessionStorage.setItem('scrollToForm', 'true')
                    refetch()
                })
                .catch(() => addGuestMessage('error'))
                .finally(() => setLoading(false))
        } else {
            addGuestMessage('error')
        }
    }, [guest])

    return (
        <Container>
            <UpperContainer>
                <InputItem
                    label="Tu nombre"
                    onChange={changeGuest}
                    defaultValue={guest?.name || ''}
                    placeholder={
                        windowDimensions.width <= 485 ||
                        windowDimensions.width > 768
                            ? 'Nombre'
                            : 'Ingresa tu nombre'
                    }
                    keyName="name"
                />
                <InputItem
                    label="Tu apellido"
                    onChange={changeGuest}
                    placeholder={
                        windowDimensions.width <= 485 ||
                        windowDimensions.width > 768
                            ? 'Apellido'
                            : 'Ingresa tu apellido'
                    }
                    keyName="lastName"
                />
            </UpperContainer>
            <div>
                <SelectItem
                    label="Confirmar asistencia al Civil"
                    onChange={changeGuest}
                    placeholder="Asistencia 16 de Febrero"
                    data={civilAssistanceData}
                    keyName="civilAssistance"
                />
                <SelectItem
                    label="Confirmar asistencia a la Iglesia y Fiesta"
                    onChange={changeGuest}
                    placeholder="Asistencia 25 de Febrero"
                    data={partyAssistanceData}
                    keyName="partyAssistance"
                />
                <SelectItem
                    label="Menu"
                    onChange={changeGuest}
                    placeholder="Selecciona tu menu"
                    data={specialMenu}
                    keyName="menu"
                />
                <InputItem
                    label="Una canción que no puede faltar en la pista"
                    onChange={changeGuest}
                    placeholder="Menea para mi - Damas Gratis"
                    keyName="song"
                />
            </div>
            <div style={{ padding: 15 }}>
                <Button
                    appearance="primary"
                    style={{
                        background: theme.colors.pink,
                    }}
                    onClick={onSubmit}
                    loading={loading}
                >
                    ENVIAR
                </Button>
            </div>
        </Container>
    )
}

export default AssistanceForm
