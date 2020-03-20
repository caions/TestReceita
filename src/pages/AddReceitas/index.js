import React, {useState} from 'react'
import { AddReceitaArea } from './styles.js'

import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'
import Input from '../../components/Input/index.js'



function AddReceitas() {

    const [nomeReceita,setNomeReceita] = useState("");

    return (
        <>
            <NavBar />
            <Contact texto="Adicionar Receita"></Contact>
            <AddReceitaArea>
                <Input
                    type="text"
                    name="nome"
                    placeholder="Nome da receita"
                    value={nomeReceita}
                    onChange={e => setNomeReceita(e.target.value)} >
                </Input>
            </AddReceitaArea>

        </>)
}

export default AddReceitas