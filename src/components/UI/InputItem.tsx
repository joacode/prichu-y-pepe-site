import React, { CSSProperties, FC, ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { Input as RSInput } from 'rsuite'
import ItemDetail from './ItemDetail'
import AppContext from '../../contexts/AppContext'
import { ItemContainer } from '../RecordDetail'

const Input = styled(RSInput)`
    width: 100%;
    display: inline-block;
`

interface InputItemProps {
    label: string
    onChange: (value: string | number) => void
    defaultValue?: string | number
    edit: boolean
    style?: CSSProperties
}

const InputItem: FC<InputItemProps> = ({
    label,
    onChange,
    defaultValue,
    edit,
    style,
}): ReactElement => {
    const { maxResolutionQuery } = useContext(AppContext)
    return (
        <ItemContainer maxWidth={`${maxResolutionQuery}px`} style={style}>
            <ItemDetail bolder>{label}</ItemDetail>
            {edit ? (
                <Input defaultValue={defaultValue} onChange={onChange} />
            ) : (
                <ItemDetail>{defaultValue}</ItemDetail>
            )}
        </ItemContainer>
    )
}

export default InputItem

InputItem.defaultProps = {
    defaultValue: '',
    style: null,
}
