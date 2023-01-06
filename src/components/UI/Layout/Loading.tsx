import React, { FC, ReactElement } from 'react'
import { Loader } from 'rsuite'

interface Props {
    label?: string
}

export const Loading: FC<Props> = ({ label }): ReactElement => {
    return <Loader center content={label} vertical size="lg" />
}

Loading.defaultProps = {
    label: 'Loading...',
}
