import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Input as RSInput, SelectPicker as RSSelectPicker } from 'rsuite'
import { theme } from 'styles/theme'
import Typography from './Typography'

const Input = styled(RSInput)`
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    // background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`

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

    // @media (max-width: ${(props): string => props?.maxWidth}) {
    //     padding: 20px 0;
    //     margin: 20px 0;
    //     width: 100%;
    // }
`

interface InputItemProps {
    label: string
    onChange: (value: string | boolean) => void
    defaultValue?: string | boolean
    select?: boolean
    style?: CSSProperties
    placeholder?: string
    data?: { label: string; value: string }[]
    password?: boolean
}

const InputItem: FC<InputItemProps> = ({
    label,
    onChange,
    defaultValue,
    select,
    style,
    placeholder,
    data,
    password,
}): ReactElement => {
    // const { maxResolutionQuery } = useContext(AppContext)
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
            {select ? (
                <SelectPicker
                    data={data}
                    searchable={false}
                    placeholder={placeholder}
                    onChange={onChange}
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
            ) : (
                <Input
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    renderValue
                    type={!password ? 'text' : 'password'}
                />
            )}
        </ItemContainer>
    )
}

export default InputItem

InputItem.defaultProps = {
    defaultValue: '',
    style: null,
    placeholder: '',
    select: false,
    data: [],
    password: false,
}
