import React from 'react';
import { ContentArea, CardArea, CardImg, CardCategory, CardTitle, CardDescription, CardLink } from './styles'

import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'

function Receitas() {
  return (
    <>
      <NavBar></NavBar>
      <Contact texto="Receitas"></Contact>
      <ContentArea>
        <CardArea>
          <CardImg></CardImg>
          <CardCategory>Pizza</CardCategory>
          <CardTitle>Calabreza</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad mi</CardDescription>
          <CardLink>Ver Receita</CardLink>
        </CardArea>
      </ContentArea>
    </>
  )
}

export default Receitas;