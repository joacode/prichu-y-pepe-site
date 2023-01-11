import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Background = styled.img`
    position: absolute;
    height: 100vh;
`

const FlowersBackground = (): ReactElement => {
    return (
        <>
            <Background src="/images/flowers.png" alt="bLeft" />
            <Background
                src="/images/flowers.png"
                alt="bRight"
                style={{ transform: 'rotate(180deg)', right: 0 }}
            />
        </>
    )
}

export default FlowersBackground
