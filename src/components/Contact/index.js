import React from 'react'
import { ContactArea, ContactText } from './styles'

function Contact(props) {
    return (
        <>
            <ContactArea>
                <ContactText>{props.texto}</ContactText>
            </ContactArea>
        </>
    )
}

export default Contact