import React from 'react';
import { Link } from 'react-router-dom'
import { NavBarArea, LogoText, NavLink } from './styles.js'

function NavBar() {
    return (
        <>
            <NavBarArea>
                <Link to='/receitas'>  <LogoText>DEVFood</LogoText> </Link>
                <Link to='/receitas'>   <NavLink>Receitas</NavLink> </Link>
                <Link to='/minhas_receitas'><NavLink>Minhas Receitas</NavLink></Link>
                <Link to='/receitas/nova'><NavLink>Adicionar Receitas</NavLink></Link>
            </NavBarArea>
        </>
    )

}

export default NavBar;