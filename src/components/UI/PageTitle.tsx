import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import Divider from './Divider'
import Typography from './Typography'

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`

interface PageTitleProps {
    title: string
    color?: CSSProperties['color']
}

const PageTitle: FC<PageTitleProps> = ({ color, title }): ReactElement => {
    return (
        <>
            <TitleContainer>
                <Typography color={color}>{title}</Typography>
            </TitleContainer>
            <Divider
                color={
                    color === theme.colors.white.normal
                        ? color
                        : theme.colors.pink
                }
            />
        </>
    )
}

export default PageTitle

PageTitle.defaultProps = {
    color: theme.colors.black,
}
