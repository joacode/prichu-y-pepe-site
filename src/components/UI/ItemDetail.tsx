import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface ItemDetailProps {
    bolder?: boolean
    color?: CSSProperties['color']
}

const Container = styled.span<ItemDetailProps>`
    font-weight: ${(props): string => (props.bolder ? 'bolder' : 'normal')};
    color: ${(props): string => props.color};
    word-wrap: break-word;
    margin: 10px;
`

interface Props {
    children: ReactNode
    bolder?: boolean
    style?: CSSProperties
    color?: CSSProperties['color']
}

const ItemDetail: FC<Props> = ({
    children,
    bolder,
    style,
    color,
}): ReactElement => {
    return (
        <Container bolder={bolder} style={style} color={color}>
            {children}
        </Container>
    )
}

export default ItemDetail

ItemDetail.defaultProps = {
    bolder: false,
    style: null,
    color: null,
}
