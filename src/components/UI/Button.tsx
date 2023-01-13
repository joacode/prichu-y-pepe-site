import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react'
import { Button as RSuiteButton } from 'rsuite'
import styled from 'styled-components'

interface ButtonProps {
    children: ReactNode
    onClick: (e: React.MouseEvent) => void
    style?: CSSProperties
    appearance: 'default' | 'primary' | 'link' | 'subtle' | 'ghost'
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'violet'
}

interface StyledButtonProps {
    maxWidth?: string
}

const StyledButton = styled(RSuiteButton)<StyledButtonProps>`
    width: 100%;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: inline-block;
    }
`

const Button: FC<ButtonProps> = ({
    onClick,
    style,
    appearance,
    children,
    color,
}): ReactElement => {
    return (
        <StyledButton
            appearance={appearance}
            style={style}
            color={color}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button

Button.defaultProps = {
    style: null,
    color: 'blue',
}
