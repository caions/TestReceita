import React, { useState } from 'react';
import { Menu, LogoText,Form } from './styles.js';

import Contact from '../../components/Contact/';
import Input from '../../components/Input/';
import Button from '../../components/Button';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      <Menu>
        <LogoText>DevFood</LogoText>
      </Menu>
      <Contact texto="Entre em sua Conta"></Contact>
      <Form>
        <Input
          type="text"
          name="username"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
       
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button text="Entrar"/>
      </Form>
      </div>
  );
}

export default Login;
