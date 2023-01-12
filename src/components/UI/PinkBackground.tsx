import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
    position: absolute;
    max-width: 100vw;
    overflow: hidden;
    max-height: 100vh;
    z-index: 0;

    @media only screen and (max-width: 375px) and (max-height: 667px) {
        height: 100vh;
    }

    @media only screen and (max-width: 360px) and (max-height: 640px) {
        height: 100vh;
    }
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
