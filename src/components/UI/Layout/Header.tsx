import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

const Container = styled.div`
    display: flex;
    width: 100%;
    background: ${theme.colors.blue.normal};
`

const HeaderItem = styled.div`
    background: ${theme.colors.grey};
    color: white;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    width: fit-content;
    height: 100%;
`

const Header = (): ReactElement => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent, path: string): void => {
        e.stopPropagation()
        router.push(`/${path}`)
    }
    return (
        <Container>
            <HeaderItem
                onClick={(e: React.MouseEvent): void =>
                    handleClick(e, 'records')
                }
            >
                Home
            </HeaderItem>
            <HeaderItem
                onClick={(e: React.MouseEvent): void => handleClick(e, 'about')}
            >
                About
            </HeaderItem>
        </Container>
    )
}

export default Header
