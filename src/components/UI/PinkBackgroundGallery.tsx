import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
    position: absolute;
    max-width: 100vw;
    overflow: hidden;
    max-height: fit-content;
    z-index: 0;
`

const Img = styled.img`
    height: 120vh;
    width: 100vw;
`

const PinkBackgroundGallery: FC<{ reference: MutableRefObject<unknown> }> = ({
    reference,
}): ReactElement => {
    return (
        <ImgContainer ref={reference}>
            <Img src="/images/background-pink.jpeg" alt="pink" />
        </ImgContainer>
    )
}

export default PinkBackgroundGallery
