import React, { ReactElement, FC, MutableRefObject, useContext } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import AppContext from 'src/contexts/AppContext'
import Typography from './UI/Typography'
import PinkBackground from './UI/PinkBackground'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    background: transparent;
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 375px) and (max-height: 667px) {
        height: 100vh;
    }

    @media only screen and (max-width: 360px) and (max-height: 640px) {
        height: 100vh;
    }
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
                <PageTitle title="REGALOS" color={theme.colors.white.normal} />
                <Typography
                    color={theme.colors.white.normal}
                    style={{
                        width: '60%',
                        margin: '70px',
                        marginBottom:
                            windowDimensions.width >= 1024 ? '130px' : '40px',
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
                    más que suficiente, pero si queres hacernos un regalo, te
                    dejamos el link a nuestra lista:
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