import React, { FC, MutableRefObject, ReactElement, useContext } from 'react'
import { Carousel } from 'rsuite'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import AppContext from 'src/contexts/AppContext'
import PinkBackground from './UI/PinkBackground'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    background: transparent;
    z-index: 1;
    position: relative;
`

const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    max-width: 100%;
    max-height: 70vh;
`

interface GalleryProps {
    gallery: MutableRefObject<unknown>
}

const imgConfig = [
    'IMG_0005.jpg',
    'IMG_0001.jpg',
    'IMG_0002.jpg',
    'IMG_0003.jpg',
    'IMG_0030.jpeg',
    'IMG_0374.jpeg',
    'IMG_0411.jpeg',
    'IMG_1500.jpeg',
    'IMG_2407.jpeg',
    'IMG_2553.jpeg',
    'IMG_4674.jpeg',
    'IMG_4988.jpeg',
    'IMG_5053.jpeg',
    'IMG_6711.jpeg',
    'IMG_8460.jpeg',
]

const Gallery: FC<GalleryProps> = ({ gallery }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    return (
        <>
            <PinkBackground reference={gallery} />
            <Container>
                <PageTitle title="NOSOTROS" color={theme.colors.white.normal} />
                <Carousel
                    style={{
                        marginTop:
                            windowDimensions.width >= 2500 ? '150px' : '40px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: '80vw',
                        height: '70vh',
                        overflow: 'hidden',
                        background: 'transparent',
                    }}
                    autoplay
                    className="custom-slider"
                >
                    {imgConfig.map((img, index) => (
                        <ImgContainer>
                            <div
                                style={{
                                    width: 'fit-content',
                                    maxHeight: 'fit-content',
                                }}
                            >
                                <Img
                                    src={`/images/carousel/${img}`}
                                    alt={index}
                                />
                            </div>
                        </ImgContainer>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}

export default Gallery
