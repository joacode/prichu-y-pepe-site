import React, { ReactElement, useContext } from 'react'
import AppContext from 'src/contexts/AppContext'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import InstagramLogo from './InstagramLogo'
import Typography from './Typography'

const ImgContainer = styled.div`
    width: 100%;
    display: grid;
`

const A = styled.a`
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;

    &:hover {
        text-decoration: none;
    }
`

const InstagramSection = (): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    return (
        <div style={{ width: '100%' }}>
            <ImgContainer>
                <A
                    href="https://www.instagram.com/prichuypepe/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span style={{ display: 'inline-block' }}>
                        <InstagramLogo color={theme.colors.pink} size="70px" />
                    </span>
                </A>
                <Typography
                    style={{
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: '29px',
                    }}
                >
                    <A
                        href="https://www.instagram.com/prichuypepe/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        @PRICHUYPEPE
                    </A>
                </Typography>
                <Typography
                    style={{
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: '29px',
                    }}
                >
                    #PRICHUYPEPE
                </Typography>
            </ImgContainer>
            <div>
                <Typography
                    style={{
                        fontSize: '20px',
                        opacity: 0.6,
                        textAlign: 'center',
                        marginTop:
                            windowDimensions.width <= 768 ? '13px' : '30px',
                        width: '85%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    Compartamos juntos este momento! Seguinos en Instagram y
                    empezá a subir tus fotos a nuestro hashtag.
                </Typography>
            </div>
        </div>
    )
}

export default InstagramSection
