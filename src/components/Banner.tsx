import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'
import BannerTitle from './UI/BannerTitle'

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
        height: 99vh;
        width: auto;
    }

    @media only screen and (max-width: 768px) and (max-height: 1024px) and (min-width: 768px) and (min-height: 1024px) {
        height: 99vh;
        width: auto;
        margin-left: -8em;
    }

    @media (max-width: 640px) {
        height: 99vh;
        width: auto;
        margin-left: -13em;
    }

    @media only screen and (max-width: 540px) and (max-height: 720px) {
        height: 99vh;
        width: auto;
    }

    @media (max-width: 425px) {
        height: 99vh;
        width: auto;
        margin-left: -16em;
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

interface BannerProps {
    banner: MutableRefObject<unknown>
}

const Banner: FC<BannerProps> = ({ banner }): ReactElement => {
    return (
        <>
            <ImgContainer ref={banner}>
                <Img src="/images/carousel/IMG_4674.jpeg" alt="port" />
            </ImgContainer>
            <BannerTitle />
        </>
    )
}

export default Banner
