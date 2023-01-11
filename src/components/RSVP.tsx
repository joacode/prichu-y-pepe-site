import React, { MutableRefObject, ReactElement, FC } from 'react'
import styled from 'styled-components'
import AssistanceForm from './Modals/AssistanceForm'
import Typography from './Typography'
import Divider from './UI/Divider'
import FlowersBackground from './UI/FlowersBackground'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`

interface RSVPPRops {
    rsvp: MutableRefObject<unknown>
}

const RSVP: FC<RSVPPRops> = ({ rsvp }): ReactElement => {
    return (
        <Container ref={rsvp}>
            <FlowersBackground />
            <TitleContainer>
                <Typography>RSVP</Typography>
            </TitleContainer>
            <Divider />
            <Typography
                style={{
                    width: '60%',
                    margin: '70px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                Confirma tu asistenciaaaaaaaa broooo
            </Typography>
            <AssistanceForm />
        </Container>
    )
}

export default RSVP
