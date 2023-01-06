import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Container from 'rsuite/Container'
import Content from 'rsuite/Content'
import Footer from 'rsuite/Footer'
import Header from './Header'
import { theme } from '../../../../styles/theme'
import { Loading } from './Loading'

const StyledContainer = styled(Container)`
    min-height: 100vh;
    max-width: 100%;
    background: ${theme.colors.green};
`

export interface Props {
    children?: ReactElement | ReactElement[]
    loading?: boolean
}

const Layout: FC<Props> = ({ children, loading }): ReactElement => {
    if (loading) {
        return <Loading />
    }

    return (
        <StyledContainer>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </StyledContainer>
    )
}

Layout.defaultProps = {
    children: undefined,
    loading: false,
}

export default Layout
