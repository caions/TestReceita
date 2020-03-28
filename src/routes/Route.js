import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({component: Component, isPrivate = false, ...rest } ) {
 
  const logado = true;
 
  if (!logado && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logado && !isPrivate) {
    return <Redirect to="/receitas" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
          <Component {...props} />
      )}
    />
  );
      }