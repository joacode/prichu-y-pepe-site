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
import Button from '../UI/Button'
import InputItem from '../UI/InputItem'
import { GuestInterface } from '../../models/guest'
import AppContext from '../../contexts/AppContext'
import { addGuestMessage } from '../UI/message'

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

const UpperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const assistanceData = [
    { label: 'Civil y Fiesta!', value: 'true' },
    { label: 'Solo Civil', value: 'true' },
    { label: 'Solo Fiesta', value: 'true' },
    { label: 'No.', value: 'false' },
]

const specialMenu = [
    { label: 'Como de todo!', value: SpecialMenu.DEFAULT },
    { label: 'Sin TACC', value: SpecialMenu.COELIAC },
    { label: 'Go Vegan!', value: SpecialMenu.VEGAN },
    { label: 'Veggie Baby', value: SpecialMenu.VEGGIE },
]

const AssistanceForm: FC = (): ReactElement => {
    const router = useRouter()
    const { maxResolutionQuery } = useContext(AppContext)
    const [guest, setGuest] = useState<GuestInterface>()

    const nameChange = (value: string): void => {
        setGuest(prevState => ({
            ...prevState,
            name: value,
        }))
    }

    const lastNameChange = (value: string): void => {
        setGuest(prevState => ({
            ...prevState,
            lastName: value,
        }))
    }

    const assistanceChange = (value: string): void => {
        setGuest(prevState => {
            if (value === 'true') {
                return {
                    ...prevState,
                    assistance: true,
                }
            }
            return {
                ...prevState,
                assistance: false,
            }
        })
    }

    const menuSelect = (value: SpecialMenu): void => {
        setGuest(prevState => ({
            ...prevState,
            menu: value,
        }))
    }

    const refetch = useCallback(() => {
        setTimeout(router.reload, 3000)
    }, [])

    const onSubmit = (): void => {
        addGuestMessage('success')
        // refetch()
        setGuest({
            name: '',
            lastName: '',
            assistance: true,
            menu: SpecialMenu.DEFAULT,
        })
    }

    return (
        <Container>
            <UpperContainer>
                <InputItem
                    label="Tu nombre:"
                    onChange={nameChange}
                    placeholder="Ingresa tu nombre"
                    // defaultValue=""
                />
                <InputItem
                    label="Tu apellido:"
                    onChange={lastNameChange}
                    placeholder="Ingresa tu apellido"
                    // defaultValue=""
                />
            </UpperContainer>
            <div>
                <InputItem
                    label="Asistencia:"
                    onChange={assistanceChange}
                    select
                    placeholder="Asistencia"
                    data={assistanceData}
                />
                <InputItem
                    label="Menu especial:"
                    onChange={menuSelect}
                    select
                    placeholder="Menu especial"
                    data={specialMenu}
                />
            </div>
            <div style={{ padding: 15 }}>
                <Button
                    appearance="primary"
                    style={{
                        background: theme.colors.pink,
                    }}
                    onClick={onSubmit}
                >
                    ENVIAR
                </Button>
            </div>
        </Container>
    )
}

export default AssistanceForm
