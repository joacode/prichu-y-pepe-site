import { useRouter } from 'next/router'
import React, { ReactElement, useCallback, useState } from 'react'
import Button from 'src/components/UI/Button'
import InputItem from 'src/components/UI/InputItem'
import { loginMessage } from 'src/components/UI/message'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const UpperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LoginPage = (): ReactElement => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const changeName = (value: string): void => {
        setName(value)
    }

    const changePassword = (value: string): void => {
        setPassword(value)
    }

    const onSubmit = useCallback(() => {
        if (
            name === process.env.NEXT_PUBLIC_NAME &&
            password === process.env.NEXT_PUBLIC_PASSWORD
        ) {
            loginMessage('success')
            sessionStorage.setItem('auth', 'true')
            router.push('/admin/prichuypepecom')
        } else {
            loginMessage('error')
        }
    }, [name, password])

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                background: theme.colors.background,
            }}
        >
            <div style={{ width: 500, marginTop: 250 }}>
                <UpperContainer>
                    <InputItem
                        label="Nombre"
                        onChange={changeName}
                        placeholder="Nombre"
                    />
                    <InputItem
                        label="Contraseña"
                        onChange={changePassword}
                        placeholder="Contraseña"
                        password
                    />
                </UpperContainer>
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
            </div>
        </div>
    )
}

export default LoginPage
