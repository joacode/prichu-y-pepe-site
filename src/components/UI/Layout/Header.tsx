import React, {
    FC,
    MutableRefObject,
    ReactElement,
    useContext,
    useState,
} from 'react'
import { FlexboxGrid } from 'rsuite'
import Typography from 'src/components/UI/Typography'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import MenuIcon from '@rsuite/icons/Menu'
import AppContext from 'src/contexts/AppContext'

const Container = styled.div<{ display: boolean }>`
    width: 100vw;
    height: 50px;
    z-index: 10;
    background: ${theme.colors.header};
    color: white;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ display }): string => {
        return !display && 'display: none;'
    }}

    @media (max-width: 1010px) {
        justify-content: flex-start;
    }
`

const Label = styled.span`
    color: ${theme.colors.white.normal};
    padding-bottom: 5px;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid ${theme.colors.white.normal};
    }
`

const MobileMenu = styled.div`
    background: ${theme.colors.header};
    margin-top: 350px;
    margin-left: -46px;
    width: 250px;
    height: 300px;
    display: grid;
`

interface HeaderProps {
    handleScroll: (e) => void
    banner: MutableRefObject<unknown>
    events: MutableRefObject<unknown>
    gifts: MutableRefObject<unknown>
    rsvp: MutableRefObject<unknown>
    gallery: MutableRefObject<unknown>
    display: boolean
}

const Header: FC<HeaderProps> = ({
    handleScroll,
    banner,
    events,
    gifts,
    rsvp,
    gallery,
    display,
}): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)

    const labels = [
        { text: 'HOME', index: 0, reference: banner },
        { text: 'EVENTOS', index: 1, reference: events },
        { text: 'REGALOS', index: 2, reference: gifts },
        { text: 'RSVP', index: 3, reference: rsvp },
        { text: 'NOSOTROS', index: 4, reference: gallery },
    ]

    return (
        <>
            <Container display={display}>
                {windowDimensions.width <= 1010 ? (
                    <>
                        <MenuIcon
                            style={{ marginLeft: '2rem' }}
                            onClick={(): void => setShowMenu(!showMenu)}
                        />
                        {showMenu && (
                            <MobileMenu>
                                {labels.map(l => (
                                    <Typography
                                        style={{
                                            fontSize: '25px',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    >
                                        <Label
                                            onClick={(): void => {
                                                handleScroll(l.reference)
                                                setShowMenu(!showMenu)
                                            }}
                                        >
                                            {l.text}
                                        </Label>
                                    </Typography>
                                ))}
                            </MobileMenu>
                        )}
                    </>
                ) : (
                    <FlexboxGrid
                        justify="space-around"
                        style={{ width: '60vw' }}
                    >
                        {labels.map(l => (
                            <FlexboxGrid.Item>
                                <Typography style={{ fontSize: '25px' }}>
                                    <Label
                                        onClick={(): void =>
                                            handleScroll(l.reference)
                                        }
                                    >
                                        {l.text}
                                    </Label>
                                </Typography>
                            </FlexboxGrid.Item>
                        ))}
                    </FlexboxGrid>
                )}
            </Container>
        </>
    )
}

export default Header
