import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
    display: inline-block;
    background: white;
    background: transparent;
    border-radius: 0.6rem;
    align-items: center;
    margin: 40px;
    margin-top: 10px;
    // box-shadow: 0px 5px 8px rgb(0 0 0 / 30%);
    z-index: 2;
    position: relative;

    width: 300px;
    height: 415px;

    @media (max-width: 425px) {
        margin-left: 0px;
        margin-right: 0px;
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
    // const { maxResolutionQuery } = useContext(AppContext)

    return (
        <BoxContainer
            // maxWidth={`${maxResolutionQuery}px`}
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
