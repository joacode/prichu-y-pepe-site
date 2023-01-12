import React, { FC, MutableRefObject, ReactElement } from 'react'
import { FlexboxGrid } from 'rsuite'
import Typography from 'src/components/UI/Typography'
import styled from 'styled-components'
import { theme } from 'styles/theme'

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
`

const Label = styled.span`
    color: ${theme.colors.white.normal};
    padding-bottom: 5px;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid ${theme.colors.white.normal};
    }
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
    const labels = [
        { text: 'HOME', index: 0, reference: banner },
        { text: 'EVENTOS', index: 1, reference: events },
        { text: 'REGALOS', index: 2, reference: gifts },
        { text: 'RSVP', index: 3, reference: rsvp },
        { text: 'NOSOTROS', index: 4, reference: gallery },
    ]
    return (
        <Container display={display}>
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
