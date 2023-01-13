import React, {
    ReactElement,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import AppContext from 'src/contexts/AppContext'
import Events from './Events'
import Gifts from './Gifts'
import RSVP from './RSVP'
import Banner from './Banner'
import Gallery from './Gallery'
import Header from './UI/Layout/Header'

const MainPage = (): ReactElement => {
    const { windowDimensions, scrollOffset } = useContext(AppContext)

    const banner = useRef(null)
    const events = useRef(null)
    const gifts = useRef(null)
    const rsvp = useRef(null)
    const gallery = useRef(null)

    const handleScroll = (element): void => {
        if (element) {
            element.current.scrollIntoView()
        }
    }

    useEffect(() => {
        const sc = sessionStorage.getItem('scrollToForm')

        if (sc === 'true') {
            handleScroll(rsvp)
            sessionStorage.setItem('scrollToForm', '')
        }
    }, [rsvp])

    return (
        <div>
            <Header
                banner={banner}
                events={events}
                gifts={gifts}
                rsvp={rsvp}
                gallery={gallery}
                handleScroll={handleScroll}
                display={scrollOffset > windowDimensions.height - 1}
            />
            <Banner banner={banner} />
            <Events events={events} />
            <Gifts gifts={gifts} />
            <RSVP rsvp={rsvp} />
            <Gallery gallery={gallery} />
        </div>
    )
}

export default MainPage
