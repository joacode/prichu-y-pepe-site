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
    const { maxResolutionQuery, windowDimensions } = useContext(AppContext)
    const [offset, setOffset] = useState(0)

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
        const onScroll = (): void => setOffset(window.pageYOffset)
        // clean up code
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return (): void => window.removeEventListener('scroll', onScroll)
    }, [])

    console.log(offset)

    return (
        <div>
            <Header
                banner={banner}
                events={events}
                gifts={gifts}
                rsvp={rsvp}
                gallery={gallery}
                handleScroll={handleScroll}
                display={offset > windowDimensions.height - 1}
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
