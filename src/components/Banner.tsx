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
`

const Container = styled.div`
    position: relative;
    margin-top: calc(100vh - 200px);
    height: 200px;
    z-index: 2;
    width: 100%;
    display: inline-grid;
    justify-content: center;
    align-content: center;
    background: ${theme.colors.honey};
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
                <Typography
                    variant="bannerTitle"
                    color={theme.colors.white.normal}
                >
                    ¡NOS CASAMOS!
                </Typography>
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
