import React from 'react'
import {ButtonContainer, ButtonText} from './styles.js'

function Button({text}) {
  return (
      <ButtonContainer>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
  )
}

export default Button;