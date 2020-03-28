import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/'

 // Cria historico de rotas
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

function App() {

  return (
    <Router history={history}>
        <Routes />
    </Router>

      
  )
}

export default App;
