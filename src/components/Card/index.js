import React from 'react';
import {CardArea,TextArea, CardImg, CardCategory, CardTitle, CardDescription, CardLink } from './styles'


function Card(props){
    return(
    <>
    <CardArea>
    
    <TextArea>
    <CardCategory>{props.cardCategory}</CardCategory>
    <CardTitle>{props.cardTitle}</CardTitle>
    <CardDescription>{props.cardDescription}</CardDescription>
    <CardLink>Ver Receita</CardLink>
    </TextArea>
    </CardArea>
    </>
    )
}

export default Card