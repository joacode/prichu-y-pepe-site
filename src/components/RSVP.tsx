import React, {
    MutableRefObject,
    ReactElement,
    FC,
    useContext,
    useMemo,
} from 'react'
import AppContext from 'src/contexts/AppContext'
import styled from 'styled-components'
import AssistanceForm from './Modals/AssistanceForm'
import FlowersBackground from './UI/FlowersBackground'
import InstagramSection from './UI/InstagramSection'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;

    @media (max-width: 768px) {
        height: 180vh;
    }

    @media only screen and (max-width: 768px) and (max-height: 1024px) and (min-width: 768px) and (min-height: 1024px) {
        height: 105vh;
    }

    @media (max-width: 425px) {
        height: 180vh;
    }

    @media only screen and (max-width: 414px) and (max-height: 896px) {
        height: 150vh;
    }

    @media only screen and (max-width: 412px) and (max-height: 915px) {
        height: 150vh;
    }

    @media (max-width: 375px) {
        height: 180vh;
    }

    @media (max-width: 375px) and (max-height: 812px) and (min-width: 375px) and (min-height: 812px) {
        height: 140vh;
    }

    @media (max-width: 360px) and (max-height: 740px) {
        height: 160vh;
    }
`

const BottomContainer = styled.div`
    display: flex;
    width: 78vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
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

interface RSVPPRops {
    rsvp: MutableRefObject<unknown>
}

const RSVP: FC<RSVPPRops> = ({ rsvp }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)

    const offset = useMemo(() => {
        const n = 768 - windowDimensions.width

        if (
            (windowDimensions.width === 414 &&
                windowDimensions.height === 896) ||
            (windowDimensions.width === 390 &&
                windowDimensions.height === 844) ||
            (windowDimensions.width === 393 &&
                windowDimensions.height === 851) ||
            (windowDimensions.width === 412 &&
                windowDimensions.height === 915) ||
            (windowDimensions.width === 412 && windowDimensions.height === 914)
        ) {
            return '490vh'
        }

        if (windowDimensions.width === 360 && windowDimensions.height === 740) {
            return '510vh'
        }

        if (windowDimensions.width === 375 && windowDimensions.height === 812) {
            return '515vh'
        }

        if (
            windowDimensions.width === 768 &&
            windowDimensions.height === 1024
        ) {
            return '438vh'
        }

        if (windowDimensions.width <= 425) {
            return `575vh`
        }
        if (windowDimensions.width <= 700) {
            return `calc(580vh - ${n * 2}px)`
        }
        if (windowDimensions.width <= 768) {
            return `calc(580vh - ${n}px)`
        }
    }, [windowDimensions])

    return (
        <Container ref={rsvp}>
            <FlowersBackground />
            <PageTitle title="RSVP" />
            <BottomContainer>
                <AssistanceForm />
                <InstagramSection />
            </BottomContainer>
            {windowDimensions.width <= 768 && (
                <FlowersBackground top={offset} />
            )}
        </Container>
    )
}

export default RSVP
