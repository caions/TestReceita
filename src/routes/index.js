import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route'
/// chamar todas páginas

import Login from '../pages/Login';
import Receitas from '../pages/Receitas';
import MinhasReceitas from '../pages/MinhasReceitas';
import FormReceitas from '../pages/FormReceitas';

export default function Routes(){
  
  return (
    <Switch>
        <Route path="/" component={Login} exact />

        <Route path="/receitas" component={Receitas} exact isPrivate/>
        <Route path="/receitas/nova" component={FormReceitas} exact isPrivate/>

        <Route path="/minhas_receitas" component={MinhasReceitas} exact isPrivate/>
        
        <Route path='*' component={() => <h1> Essa página não existente :)</h1>  } />

    </Switch>


  )
}
