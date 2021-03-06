import React from 'react';
import { ContentArea } from './styles'

import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'
import Card from '../../components/Card'

function Receitas() {
  return (
    <>
      <NavBar></NavBar>
      <Contact texto="Receitas"></Contact>
      <ContentArea>
      <Card 
        cardCategory="Pizza"
        cardTitle="Calabreza"
        cardDescription="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad mi"
        />
      </ContentArea>
    </>
  )
}

export default Receitas;