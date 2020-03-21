import React from 'react'
import { SelectText } from './styles'

function Select({
    value,
    onChange,
    options

}) {
    return (
        <SelectText
            value={value}
            onChange={onChange}
        >
            {options.map(option => (
                <option value={option.value}>{option.label}</option>
            )
            )}
        </SelectText>
    )
}

export default Select