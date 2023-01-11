import React, { ReactElement, FC, MutableRefObject } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Typography from './Typography'
import Divider from './UI/Divider'

const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    background: transparent;
    z-index: 1;
    position: relative;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`

const ImgContainer = styled.div`
    position: absolute;
    width: 100%;
    overflow: hidden;
    max-height: 100vh;
    z-index: 0;
`

const Img = styled.img`
    height: 100vh;
    width: 100vw;
`

interface GiftsProps {
    gifts: MutableRefObject<unknown>
}

const Gifts: FC<GiftsProps> = ({ gifts }): ReactElement => {
    return (
        <>
            <ImgContainer ref={gifts}>
                <Img src="/images/background-pink.jpeg" alt="pink" />
            </ImgContainer>
            <Container>
                <TitleContainer>
                    <Typography color={theme.colors.white.normal}>
                        REGALOS
                    </Typography>
                </TitleContainer>
                <Divider color={theme.colors.white.normal} />
                <Typography
                    color={theme.colors.white.normal}
                    style={{
                        width: '60%',
                        margin: '70px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                        fontSize: '25px',
                        fontWeight: 300,
                    }}
                >
                    Que hayas decidido compartir este momento con nosotros es
                    más que suficiente, pero si queres hacernos un regalo, te
                    dejamos un link con algunas propuestas:
                </Typography>
                <Typography color={theme.colors.white.normal}>
                    aca el link a confites
                </Typography>
            </Container>
        </>
    )
}

export default Gifts
