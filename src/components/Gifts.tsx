import React, { ReactElement, FC, MutableRefObject, useContext } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import AppContext from 'src/contexts/AppContext'
import Typography from './UI/Typography'
import PinkBackground from './UI/PinkBackground'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    overflow: hidden;
    height: 100vh !important;
    background: transparent;
    z-index: 1;
    position: relative;
`

const A = styled.a`
    margin: 0 0.7rem;
    font-family: Josefin Sans, sans-serif !important;
    font-size: 0.8rem;
    letter-spacing: 0.13rem;
    width: 160px;
    height: 60px;
    padding-bottom: 0.18rem;
    padding-top: 0.43rem;
    text-transform: uppercase !important;
    background: ${theme.colors.header};
    color: ${theme.colors.white.normal};
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    transition-duration: 0.25s, 0.25s, 0.25s, 0.25s;
    border-radius: 0.4rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;

    &:hover {
        text-decoration: none;
        background: ${theme.colors.giftCardHover};
        color: white;
        transition-duration: 0.25s, 0.25s, 0.25s, 0.25s;
    }

    &:focus {
        text-decoration: none;
        background: ${theme.colors.giftCardHover};
        color: white;
        transition-duration: 0.25s, 0.25s, 0.25s, 0.25s;
    }
`

interface GiftsProps {
    gifts: MutableRefObject<unknown>
}

const Gifts: FC<GiftsProps> = ({ gifts }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    return (
        <>
            <PinkBackground reference={gifts} />
            <Container>
                <PageTitle
                    title="REGALOS"
                    color={theme.colors.white.normal}
                    style={{
                        marginTop: windowDimensions.height <= 667 ? 70 : 200,
                    }}
                />
                <Typography
                    color={theme.colors.white.normal}
                    style={{
                        width: '60%',
                        margin: '70px',
                        marginBottom:
                            windowDimensions.width >= 1024 ? '40px' : '40px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop:
                            windowDimensions.width >= 2500 ? '130px' : '70px',
                        textAlign: 'center',
                        fontSize:
                            windowDimensions.width <= 425 ? '20px' : '25px',
                        fontWeight: 400,
                    }}
                >
                    Que hayas decidido compartir este momento con nosotros es
                    más que suficiente, pero si querés hacernos un regalo, te
                    dejamos el link a nuestra lista.
                </Typography>
                <A
                    href="https://confites.com/pareja/prichuypepe/regalar"
                    target="_blank"
                >
                    VER LISTA
                </A>
            </Container>
        </>
    )
}

export default Gifts
