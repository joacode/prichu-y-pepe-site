import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'

interface DividerProps {
    color?: CSSProperties['color']
}

const Container = styled.hr<{ color?: string }>`
    max-width: 3.25rem;
    border-width: 0.2rem;
    border-color: ${({ color }): string => color};
`

const Divider: FC<DividerProps> = ({ color }): ReactElement => {
    return <Container color={color} />
}

export default Divider

Divider.defaultProps = {
    color: theme.colors.pink,
}
