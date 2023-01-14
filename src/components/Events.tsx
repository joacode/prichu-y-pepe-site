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
        height: 963px;
    }

    @media (max-width: 1149px) {
        height: 1840px;
    }
`

const BoxTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-top: 10px;
`

const Img = styled.img`
    width: 160px;
    border-radius: 50%;
    margin-top: -10px;
    margin-bottom: -10px;
`

const ImgContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 170px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    margin-bottom: -10px;
`

const locationConfig = [
    {
        title: 'Civil',
        path: 'https://goo.gl/maps/BuyvMjWG9fcuetES7',
        dressCode: 'Smart Casual',
        img: '/images/heart-test.png',
        address: 'Moreno 305',
        location: 'San Isidro',
        name: 'Registro Civil San Isidro',
        date: '16 FEB 2023 14:15 hs',
        marginText: '*Festejo en Casa Catedral hasta las 00 hs',
    },
    {
        title: 'Ceremonia',
        path: 'https://goo.gl/maps/hfeVJ26sVMSW6KRv8',
        dressCode: 'Elegante',
        img: '/images/rings.png',
        address: 'Libertador 17115',
        location: 'Béccar',
        name: 'Capilla del Colegio Marin',
        date: '25 FEB 2023 15:30 hs',
        style: { width: '180px' },
    },
    {
        title: 'Fiesta',
        path: 'https://goo.gl/maps/mpc6NxaBZ7pQ8ikd9',
        dressCode: 'Elegante',
        img: '/images/partytest.png',
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
                                    marginTop: '10px',
                                    width: '90px',
                                    textAlign: 'center',
                                }}
                            >
                                {location.date.toUpperCase()}
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: '10px',
                                    width: 'fit-content',
                                    textAlign: 'center',
                                }}
                            >
                                {`DRESS CODE: ${location.dressCode.toUpperCase()}`}
                            </Typography>
                            <ImgContainer>
                                <Img
                                    src={location.img}
                                    alt={location.path}
                                    style={location?.style}
                                />
                            </ImgContainer>
                            <div style={{ marginBottom: 10 }}>
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
                                        marginTop: '10px',
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
                                <a
                                    href={location.path}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography
                                        style={{
                                            width: 'fit-content',
                                            fontSize: '13px',
                                            fontWeight: 800,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            borderBottom: '1px solid',
                                            marginTop: 15,
                                        }}
                                    >
                                        VER MAPA
                                    </Typography>
                                </a>
                                {location.marginText && (
                                    <Typography
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            width: 'fit-content',
                                            textAlign: 'center',
                                            color: 'black',
                                            position: 'absolute',
                                            marginTop: '26px',
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
