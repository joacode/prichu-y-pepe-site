import React, { FC, MutableRefObject, ReactElement } from 'react'
import { FlexboxGrid } from 'rsuite'
import Typography from 'src/components/Typography'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const Container = styled.div`
    width: 100vw;
    height: 50px;
    z-index: 10;
    background: ${theme.colors.header};
    color: white;
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Label = styled.span`
    color: ${theme.colors.white.normal};
    padding-bottom: 5px;

    &:hover {
        border-bottom: 1px solid ${theme.colors.white.normal};
    }
`

// <Banner />
// <Events />
// <Gifts />
// <RSVP />
// {/* Galeria de fotos + instagram */}

interface HeaderProps {
    handleScroll: (e) => void
    banner: MutableRefObject<unknown>
    events: MutableRefObject<unknown>
    gifts: MutableRefObject<unknown>
    rsvp: MutableRefObject<unknown>
    gallery: MutableRefObject<unknown>
}

const Header: FC<HeaderProps> = ({
    handleScroll,
    banner,
    events,
    gifts,
    rsvp,
    gallery,
}): ReactElement => {
    const labels = [
        { text: 'HOME', index: 0, reference: banner },
        { text: 'EVENTOS', index: 1, reference: events },
        { text: 'REGALOS', index: 2, reference: gifts },
        { text: 'RSVP', index: 3, reference: rsvp },
        { text: 'NOSOTROS', index: 4, reference: null },
    ]
    return (
        <Container>
            <FlexboxGrid justify="space-around" style={{ width: '60vw' }}>
                {labels.map(l => (
                    <FlexboxGrid.Item>
                        <Typography style={{ fontSize: '25px' }}>
                            <Label
                                onClick={(): void => handleScroll(l.reference)}
                            >
                                {l.text}
                            </Label>
                        </Typography>
                    </FlexboxGrid.Item>
                ))}
            </FlexboxGrid>
        </Container>
    )
}

export default Header
