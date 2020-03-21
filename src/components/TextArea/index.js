import React from 'react'
import {TextAreaText} from './styles'

function TextArea({
    name,
    placeholder,
    value,
    onChange
}) {
    return (
        <TextAreaText
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )

}

export default TextArea