import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Typography from './Typography'

const Container = styled.div`
    position: relative;
    margin-top: calc(100vh - 12.5rem);
    height: 200px;
    z-index: 2;
    width: 100%;
    display: inline-grid;
    justify-content: center;
    align-content: center;
    background: ${theme.colors.white.light};

    @media (max-width: 836px) {
        margin-top: calc(100vh - 14.4rem);
        height: 230px;
        text-align: center;
    }

    @media (max-width: 396px) {
        margin-top: calc(100vh - 16rem);
        height: 250px;
        text-align: center;
    }

    @media only screen and (max-width: 375px) and (max-height: 667px) {
        margin-top: calc(100vh - 18.5rem);
        height: 295px;
        text-align: center;
    }
`

const BannerTypography = styled(Typography)`
    @media (max-width: 425px) {
        margin-top: calc(100vh - 12.6rem);
        height: 200px;
        text-align: center;
    }

    @media (max-width: 375px) {
        margin-bottom: 50px;
    }
`

const BannerTitle: FC<{
    containerStyle?: CSSProperties
}> = ({ containerStyle }): ReactElement => {
    return (
        <Container style={containerStyle}>
            <BannerTypography
                color={theme.colors.black}
                style={{
                    width: 'fit-content',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    letterSpacing: '0.3rem',
                    fontSize: 20,
                }}
            >
                ¡NOS CASAMOS!
            </BannerTypography>
            <Typography
                variant="bannerTitle"
                color={theme.colors.black}
                style={{ fontFamily: `'Montserrat', sans-serif` }}
            >
                PRI & JOACO
            </Typography>
        </Container>
    )
}

export default BannerTitle

BannerTitle.defaultProps = {
    containerStyle: {},
}
