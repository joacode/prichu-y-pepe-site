import React, { MutableRefObject, ReactElement, FC } from 'react'
import styled from 'styled-components'
import AssistanceForm from './Modals/AssistanceForm'
import FlowersBackground from './UI/FlowersBackground'
import InstagramSection from './UI/InstagramSection'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;
`

const BottomContainer = styled.div`
    display: flex;
    width: 78vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`

interface RSVPPRops {
    rsvp: MutableRefObject<unknown>
}

const RSVP: FC<RSVPPRops> = ({ rsvp }): ReactElement => {
    return (
        <Container ref={rsvp}>
            <FlowersBackground />
            <PageTitle title="RSVP" />
            <BottomContainer>
                <AssistanceForm />
                <InstagramSection />
            </BottomContainer>
        </Container>
    )
}

export default RSVP
