import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Typography from './UI/Typography'

const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    max-height: 100vh;
`

const Img = styled.img`
    width: 100%;

    @media (max-width: 1440px) {
        height: auto;
        width: 100vw;
    }

    @media only screen and (max-width: 1440px) and (min-width: 1110px) {
        height: auto;
        width: 100vw;
    }

    @media only screen and (max-width: 1110px) and (min-width: 768px) {
        height: 100vh;
        width: auto;
    }

    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (min-width: 1024px) and (min-height: 1366px) {
        height: 100vh;
        width: auto;
        margin-left: -13em;
    }

    @media only screen and (max-width: 912px) and (max-height: 1368px) and (min-width: 912px) and (min-height: 1368px) {
        height: 100vh;
        width: auto;
        margin-left: -13em;
    }

    @media only screen and (max-width: 820px) and (max-height: 1180px) and (min-width: 820px) and (min-height: 1180px) {
        height: 99vh;
        width: auto;
        margin-left: -10em;
    }

    @media (max-width: 768px) {
        height: 100vh;
        width: auto;
    }

    @media only screen and (max-width: 768px) and (max-height: 1024px) and (min-width: 768px) and (min-height: 1024px) {
        height: 99vh;
        width: auto;
        margin-left: -8em;
    }

    @media (max-width: 640px) {
        height: 100vh;
        width: auto;
        margin-left: -6em;
    }

    @media only screen and (max-width: 540px) and (max-height: 720px) {
        height: 99vh;
        width: auto;
    }

    @media (max-width: 425px) {
        height: 100vh;
        width: auto;
        margin-left: -10em;
    }

    @media only screen and (max-width: 414px) and (max-height: 896px) {
        height: 99vh;
        width: auto;
        margin-left: -16em;
    }

    @media only screen and (max-width: 412px) and (max-height: 915px) {
        height: 99vh;
        width: auto;
        margin-left: -16em;
    }

    @media (max-width: 375px) {
        height: 99vh;
        width: auto;
        margin-left: -8em;
    }

    @media (max-width: 375px) and (max-height: 812px) and (min-width: 375px) and (min-height: 812px) {
        height: 99vh;
        width: auto;
        margin-left: -14em;
    }

    @media (max-width: 360px) and (max-height: 740px) {
        height: 99vh;
        width: auto;
        margin-left: -11.5em;
    }
`

const Container = styled.div`
    position: relative;
    margin-top: calc(100vh - 12.5rem);
    height: 200px;
    z-index: 2;
    width: 100%;
    display: inline-grid;
    justify-content: center;
    align-content: center;
    background: ${theme.colors.honey};

    @media (max-width: 836px) {
        margin-top: calc(100vh - 14.4rem);
        height: 230px;
        text-align: center;
        background: hsla(20, 29%, 65%, 1);
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

interface BannerProps {
    banner: MutableRefObject<unknown>
}

const Banner: FC<BannerProps> = ({ banner }): ReactElement => {
    return (
        <>
            <ImgContainer ref={banner}>
                <Img src="/images/carousel/IMG_4674.jpeg" alt="port" />
            </ImgContainer>
            <Container>
                <BannerTypography
                    variant="bannerTitle"
                    color={theme.colors.white.normal}
                >
                    ¡NOS CASAMOS!
                </BannerTypography>
                <Typography
                    color={theme.colors.white.normal}
                    style={{
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    PRI & JOACO
                </Typography>
            </Container>
        </>
    )
}

export default Banner
