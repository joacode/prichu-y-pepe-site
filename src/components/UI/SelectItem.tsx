import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { SelectPicker as RSSelectPicker } from 'rsuite'
import { theme } from 'styles/theme'
import { ChangeGuest } from 'src/models/guest'
import Typography from './Typography'

const SelectPicker = styled(RSSelectPicker)`
    display: inline;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
`

const ItemContainer = styled.div`
    padding: 0px 15px;
    margin-bottom: 16px;
`

interface SelectItemProps {
    label: string
    onChange: (key: string, value: string) => void
    style?: CSSProperties
    placeholder?: string
    data?: { label: string; value: string }[]
    keyName: ChangeGuest['key']
}

const SelectItem: FC<SelectItemProps> = ({
    label,
    onChange,
    style,
    placeholder,
    data,
    keyName,
}): ReactElement => {
    return (
        <ItemContainer style={style}>
            <Typography
                style={{
                    marginBottom: 8,
                    fontSize: 17,
                    display: 'inline-block',
                }}
            >
                {label}
            </Typography>
            <SelectPicker
                data={data}
                searchable={false}
                placeholder={placeholder}
                onChange={(value: ChangeGuest['value']): void =>
                    onChange(keyName, value)
                }
                renderMenuItem={(_l, item): JSX.Element => {
                    return (
                        <span style={{ color: theme.colors.black }}>
                            {item?.label}
                        </span>
                    )
                }}
                renderValue={(_l, item): JSX.Element => {
                    return (
                        <span style={{ color: theme.colors.black }}>
                            {item?.label}
                        </span>
                    )
                }}
            />
        </ItemContainer>
    )
}

export default SelectItem

SelectItem.defaultProps = {
    style: null,
    placeholder: '',
    data: [],
}
