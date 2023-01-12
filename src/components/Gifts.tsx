import React, { ReactElement, FC, MutableRefObject } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Typography from './UI/Typography'
import PinkBackground from './UI/PinkBackground'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    background: transparent;
    z-index: 1;
    position: relative;
`

const GiftCard = styled.div`
    height: 210px;
    width: 420px;
    padding: 4.5rem 0 3.5rem;
    background: hsla(30, 15%, 95%, 0);
    margin-left: auto;
    margin-right: auto;
    display: grid;
    text-align: center;
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
                        marginBottom: '40px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                        fontSize: '25px',
                        fontWeight: 400,
                    }}
                >
                    Que hayas decidido compartir este momento con nosotros es
                    más que suficiente, pero si queres hacernos un regalo, te
                    dejamos el link a nuestra lista:
                </Typography>
                <GiftCard>
                    {/* <Typography
                        style={{
                            fontSize: '1rem',
                            letterSpacing: '.2rem',
                            lineHeight: '1.6rem',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                        }}
                    >
                        ¿QUERÉS REGALARNOS?
                    </Typography> */}
                    <A
                        href="https://confites.com/pareja/prichuypepe/regalar"
                        target="_blank"
                    >
                        VER LISTA
                    </A>
                </GiftCard>
            </Container>
        </>
    )
}

export default Gifts
