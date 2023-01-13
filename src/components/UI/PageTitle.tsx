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
    style?: CSSProperties
}

const PageTitle: FC<PageTitleProps> = ({
    color,
    title,
    style,
}): ReactElement => {
    return (
        <div style={{ zIndex: 1, position: 'relative' }}>
            <TitleContainer style={style}>
                <Typography color={color}>{title}</Typography>
            </TitleContainer>
            <Divider
                color={
                    color === theme.colors.white.normal
                        ? color
                        : theme.colors.pink
                }
            />
        </div>
    )
}

export default PageTitle

PageTitle.defaultProps = {
    color: theme.colors.black,
    style: {},
}
