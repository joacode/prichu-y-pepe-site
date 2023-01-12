import React, { FC, MutableRefObject, ReactElement, useContext } from 'react'
import { Grid as RSGrid } from 'rsuite'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import AppContext from 'src/contexts/AppContext'
import Typography from './UI/Typography'
import Box from './UI/Box'
import FlowersBackground from './UI/FlowersBackground'
import PageTitle from './UI/PageTitle'

const Grid = styled(RSGrid)`
    width: fit-content;
    margin-top: 70px;

    @media (min-width: 2500px) {
        margin-top: 250px;
    }

    @media (max-width: 1149px) {
        height: 100vw;
        width: fit-content;
        align-items: center;
        display: grid;
    }

    @media (max-width: 425px) {
        height: 100vw;
        width: fit-content;
        align-items: center;
        display: grid;
        margin-top: 0;
    }
`

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;

    @media (max-width: 1149px) {
        height: 250vh;
    }

    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (min-width: 1024px) and (min-height: 1366px) {
        height: 130vh;
    }

    @media only screen and (max-width: 912px) and (max-height: 1368px) and (min-width: 912px) and (min-height: 1368px) {
        height: 130vh;
    }

    @media only screen and (max-width: 820px) and (max-height: 1180px) and (min-width: 820px) and (min-height: 1180px) {
        height: 160vh;
    }

    @media (max-width: 768px) {
        height: 280vh;
    }

    @media only screen and (max-width: 768px) and (max-height: 1024px) and (min-width: 768px) and (min-height: 1024px) {
        height: 180vh;
    }

    @media (max-width: 425px) {
        height: 270vh;
    }

    @media only screen and (max-width: 414px) and (max-height: 896px) {
        height: 213vh;
    }

    @media only screen and (max-width: 412px) and (max-height: 915px) {
        height: 230vh;
    }

    @media only screen and (max-width: 390px) and (max-height: 844px) {
        height: 220vh;
    }

    @media (max-width: 375px) {
        height: 270vh;
    }

    @media (max-width: 375px) and (max-height: 812px) and (min-width: 375px) and (min-height: 812px) {
        height: 215vh;
    }

    @media only screen and (max-width: 360px) and (max-height: 740px) {
        height: 230vh;
    }

    @media only screen and (max-width: 360px) and (max-height: 640px) {
        height: 270vh;
    }
`

const BoxTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    background: ${theme.colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
`

const Img = styled.img`
    width: 300px;
    border-radius: 50%;
`

const locationConfig = [
    {
        title: 'Civil',
        path: 'https://goo.gl/maps/BuyvMjWG9fcuetES7',
        img: '/images/registro-civil.png',
        address: 'Moreno 305, San Isidro',
        name: 'Registro Civil',
        date: 'Jueves 16 de febrero, 14:30 hs',
    },
    {
        title: 'Ceremonia',
        path: 'https://goo.gl/maps/hfeVJ26sVMSW6KRv8',
        img: '/images/capilla-marin.png',
        address: 'Av. del Libertador 17115, 1643 Béccar',
        name: 'Capilla del Colegio Marin',
        date: 'Sabado 25 de febrero, 15:30 hs',
    },
    {
        title: 'Fiesta',
        path: 'https://goo.gl/maps/mpc6NxaBZ7pQ8ikd9',
        img: '/images/quinta-anchorena.png',
        address: 'Anchorena 477, San Isidro',
        name: 'Quinta de Anchorena',
        date: 'Sabado 25 de febrero, 17:00 hs',
    },
]

interface EventsProps {
    events: MutableRefObject<unknown>
}

const Events: FC<EventsProps> = ({ events }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    return (
        <Container ref={events}>
            <FlowersBackground />
            <PageTitle title="EVENTOS" />
            <Grid style={{ zIndex: 1 }}>
                {locationConfig.map(location => {
                    return (
                        <Box>
                            <BoxTitleContainer>
                                <Typography
                                    color={theme.colors.white.normal}
                                    style={{
                                        width: 'fit-content',
                                        fontSize: 15,
                                        fontWeight: 700,
                                    }}
                                >
                                    {location.title.toUpperCase()}
                                </Typography>
                            </BoxTitleContainer>
                            <a
                                href={location.path}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Img src={location.img} alt={location.path} />
                            </a>
                            <div style={{ marginTop: 10, marginBottom: 10 }}>
                                <Typography
                                    style={{
                                        width: 'fit-content',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                >
                                    {location.address.toUpperCase()}
                                </Typography>
                                <Typography
                                    style={{
                                        width: 'fit-content',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                >
                                    {location.name.toUpperCase()}
                                </Typography>
                                <Typography
                                    style={{
                                        width: 'fit-content',
                                        fontSize: '13px',
                                        fontWeight: 800,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                >
                                    {location.date.toUpperCase()}
                                </Typography>
                            </div>
                        </Box>
                    )
                })}
                {windowDimensions.width <= 1024 && (
                    <FlowersBackground top="199vh" />
                )}
                {windowDimensions.width <= 768 && (
                    <FlowersBackground top="300vh" />
                )}
            </Grid>
        </Container>
    )
}

export default Events
