import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Background = styled.img`
    position: absolute;
    height: 100vh;
`

// eslint-disable-next-line react/require-default-props
const FlowersBackground: FC<{ top?: string }> = ({ top }): ReactElement => {
    return (
        <>
            <Background
                src="/images/flowers.png"
                alt="bLeft"
                style={{ left: 0, top }}
            />
            <Background
                src="/images/flowers.png"
                alt="bRight"
                style={{ transform: 'rotate(180deg)', right: 0, top }}
            />
        </>
    )
}

export default FlowersBackground
