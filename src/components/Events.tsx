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
        height: 200vh;
    }

    @media only screen and (max-width: 414px) and (max-height: 896px) {
        height: 240vh;
    }

    @media only screen and (max-width: 412px) and (max-height: 915px) {
        height: 240vh;
    }

    @media only screen and (max-width: 390px) and (max-height: 844px) {
        height: 240vh;
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
    // background: ${theme.colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-top: 10px;
`

const Img = styled.img`
    width: 190px;
    border-radius: 50%;
`

const ImgContainer = styled.div`
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 20px;
`

const locationConfig = [
    {
        title: 'Civil',
        path: 'https://goo.gl/maps/BuyvMjWG9fcuetES7',
        img: '/images/heart-test.png',
        address: 'Moreno 305',
        location: 'San Isidro',
        name: 'Registro Civil San Isidro',
        date: '16 FEB 2023 14:30 hs',
        marginText: 'Seguimos en Casa Catedral hasta las 00 hs',
    },
    {
        title: 'Ceremonia',
        path: 'https://goo.gl/maps/hfeVJ26sVMSW6KRv8',
        img: '/images/capilla-marin.png',
        address: 'Libertador 17115',
        location: 'Béccar',
        name: 'Capilla del Colegio Marin',
        date: '25 FEB 2023 15:30 hs',
    },
    {
        title: 'Fiesta',
        path: 'https://goo.gl/maps/mpc6NxaBZ7pQ8ikd9',
        img: '/images/quinta-anchorena.png',
        address: 'Anchorena 477',
        location: 'San Isidro',
        name: 'Quinta de Anchorena',
        date: '25 FEB 2023 17:00 hs',
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
                                    variant="bannerTitle"
                                    color={theme.colors.pink}
                                    style={{
                                        width: 'fit-content',
                                        fontSize: 20,
                                        letterSpacing: '5px',
                                        fontWeight: 1000,
                                        marginTop: '15px',
                                    }}
                                >
                                    {location.title.toUpperCase()}
                                </Typography>
                            </BoxTitleContainer>
                            <Typography
                                style={{
                                    fontSize: '13px',
                                    fontWeight: 1000,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: '5px',
                                    width: '90px',
                                    textAlign: 'center',
                                }}
                            >
                                {location.date.toUpperCase()}
                            </Typography>
                            <ImgContainer>
                                <a
                                    href={location.path}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Img
                                        src={location.img}
                                        alt={location.path}
                                    />
                                </a>
                            </ImgContainer>
                            <div style={{ marginTop: 10, marginBottom: 10 }}>
                                <Typography
                                    style={{
                                        width: 'fit-content',
                                        fontSize: '13px',
                                        fontWeight: 800,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                >
                                    {location.name.toUpperCase()}
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: '125px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {location.address.toUpperCase()}
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: '125px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {location.location.toUpperCase()}
                                </Typography>
                                {location.marginText && (
                                    <Typography
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            width: 'fit-content',
                                            textAlign: 'center',
                                            color: 'black',
                                            position: 'absolute',
                                            marginTop: '15px',
                                            marginLeft: '10px',
                                            opacity: 0.6,
                                        }}
                                    >
                                        {location.marginText}
                                    </Typography>
                                )}
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
