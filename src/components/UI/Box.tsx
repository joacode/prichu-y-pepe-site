import React, { CSSProperties, FC, ReactElement, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../contexts/AppContext'

interface BoxProps {
    width?: string
    maxWidth?: string
    lessPadding?: boolean
    fullWidth?: boolean
}

const BoxContainer = styled.div<BoxProps>`
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px auto 40px;
  padding: ${(props): string => (props?.lessPadding ? '10px' : '30px')}
    //width: ${(props): string => (props?.fullWidth ? '100%' : '305px')}
  width: fit-content;
  max-width: 60rem;

  @media (max-width: ${(props): string => props?.maxWidth}) {
    margin: 20px 40px;
    display: block;
    width: ${(props): string => (props?.fullWidth ? '100%' : '305px')}
  }
`

interface Props {
    children: ReactElement | ReactElement[]
    style?: CSSProperties
    lessPadding?: boolean
    fullWidth?: boolean
}

const Box: FC<Props> = ({
    children,
    style,
    lessPadding,
    fullWidth,
}): ReactElement => {
    const { maxResolutionQuery } = useContext(AppContext)

    return (
        <BoxContainer
            maxWidth={`${maxResolutionQuery}px`}
            style={style}
            lessPadding={lessPadding}
            fullWidth={fullWidth}
        >
            {children}
        </BoxContainer>
    )
}

export default Box

Box.defaultProps = {
    style: null,
    lessPadding: false,
    fullWidth: false,
}
