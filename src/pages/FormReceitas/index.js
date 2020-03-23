import React, { useState } from 'react'
import { AddReceitaArea,LabelDescricao } from './styles.js'

import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import InputSubmit from '../../components/InputSubmit'


function AddReceitas() {

    const [nomeReceita, setNomeReceita] = useState("");
    const [categoriaReceita, setCategoriaReceita] = useState("");
    const [descricaoReceita, setDescricaoReceita] = useState("");


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

                <Select
                    value={categoriaReceita}
                    onChange={e => setCategoriaReceita(e.target.value)}
                    options={[
                        { value: 'default', label: 'Escolha a categoria da receita' },
                        { value: 'Francesa', label: 'Francesa' },
                        { value: 'italiana', label: 'italiana' },
                        { value: 'Brasileira', label: 'Brasileira' },
                    ]}
                />
                <LabelDescricao>Descrição</LabelDescricao>
                <TextArea
                    name="Nome da receita"
                    placeholder=""
                    value={descricaoReceita}
                    onChange={e => setDescricaoReceita(e.target.value)} >
                </TextArea>
                <InputSubmit type="submit" value="Criar receita"/>
            </AddReceitaArea>

        </>)
}

export default AddReceitas