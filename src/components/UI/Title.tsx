import React, { CSSProperties, FC, ReactElement } from 'react'

interface Props {
    children: ReactElement | ReactElement[]
    style?: CSSProperties
}

const Title: FC<Props> = ({ style, children }): ReactElement => {
    return (
        <h1
            style={{
                textAlign: 'center',
                width: 'auto',
                wordWrap: 'break-word',
                ...style,
            }}
        >
            {children}
        </h1>
    )
}

export default Title

Title.defaultProps = {
    style: null,
}
