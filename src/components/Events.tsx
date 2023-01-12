import React, { FC, MutableRefObject, ReactElement } from 'react'
import { Grid as RSGrid } from 'rsuite'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Typography from './UI/Typography'
import Box from './UI/Box'
import FlowersBackground from './UI/FlowersBackground'
import PageTitle from './UI/PageTitle'

const Grid = styled(RSGrid)`
    width: fit-content;
`

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;
`

const BoxTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    background: ${theme.colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
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
    return (
        <Container ref={events}>
            <FlowersBackground />
            <PageTitle title="EVENTOS" />
            <Grid>
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
            </Grid>
        </Container>
    )
}

export default Events
