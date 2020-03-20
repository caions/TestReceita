import React from 'react';
import {InputText} from './styles.js';

function Input( 
  {
    type,
    name,
    placeholder,
    value,
    onChange
  }
  ) {

  return (
    <InputText
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}     
  />
  )
}

export default Input;