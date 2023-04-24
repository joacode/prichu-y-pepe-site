import React, { MutableRefObject, ReactElement, FC, useContext } from 'react'
import AppContext from 'src/contexts/AppContext'
import styled from 'styled-components'
import AssistanceForm from './UI/AssistanceForm'
import FlowersBackground from './UI/FlowersBackground'
import InstagramSection from './UI/InstagramSection'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;

    @media (max-width: 768px) {
        height: 1501px;
    }
`

const BottomContainer = styled.div`
    display: flex;
    width: 78vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
    z-index: 2;
    position: relative;

    @media (min-width: 2500px) {
        margin-top: 250px;
    }

    @media only screen and (max-width: 1110px) and (min-width: 768px) {
        margin-top: 45px;
    }

    @media (max-width: 768px) {
        margin-top: 65px;
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 425px) {
        display: flex;
        flex-wrap: wrap;
    }
`

interface RSVPProps {
    rsvp: MutableRefObject<unknown>
}

const RSVP: FC<RSVPProps> = ({ rsvp }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)

    return (
        <Container ref={rsvp} id="rsvp">
            <FlowersBackground />
            <PageTitle title="RSVP" />
            <BottomContainer>
                <AssistanceForm />
                <InstagramSection />
            </BottomContainer>
            {windowDimensions.width <= 768 && <FlowersBackground top="610vh" />}
        </Container>
    )
}

export default RSVP
