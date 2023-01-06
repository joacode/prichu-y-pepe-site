import React, {
    CSSProperties,
    FC,
    ReactElement,
    ReactNode,
    useContext,
} from 'react'
import { Button as RSuiteButton } from 'rsuite'
import styled from 'styled-components'
import AppContext from '../../contexts/AppContext'

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
    const { maxResolutionQuery } = useContext(AppContext)

    return (
        <StyledButton
            appearance={appearance}
            style={style}
            color={color}
            onClick={onClick}
            maxWidth={`${maxResolutionQuery}px`}
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
