import React from 'react';
import {NavBarArea, LogoText,NavLink} from './styles.js'

function NavBar () {
    return (
        <>
        <NavBarArea>
        <LogoText>DEVFood</LogoText>
        <NavLink>Receitas</NavLink>
        <NavLink>Minhas Receitas</NavLink>
        <NavLink>Adicionar Receitas</NavLink>
        </NavBarArea>
        </>
    )

}

export default NavBar;