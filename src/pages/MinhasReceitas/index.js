import React from 'react'
import {ContentArea,CardArea} from './styled'

import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'
import Card from '../../components/Card'
import imgPizza from '../../assets/images/pizza.jpg'

function MinhasReceitas(){
    return(<>
    <NavBar />
    <Contact texto="Minhas Receitas"/>
    <ContentArea>
        <Card 
        img={imgPizza}
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

export default MinhasReceitas