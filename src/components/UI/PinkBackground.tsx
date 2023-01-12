import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
    position: absolute;
    width: 100%;
    overflow: hidden;
    max-height: 100vh;
    z-index: 0;
`

const Img = styled.img`
    height: 100vh;
    width: 100vw;
`

const PinkBackground: FC<{ reference: MutableRefObject<unknown> }> = ({
    reference,
}): ReactElement => {
    return (
        <ImgContainer ref={reference}>
            <Img src="/images/background-pink.jpeg" alt="pink" />
        </ImgContainer>
    )
}

export default PinkBackground
