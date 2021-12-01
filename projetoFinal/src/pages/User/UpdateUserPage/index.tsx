import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../../services/api';

import { Container, Form, FormBlock, MainSection, SecondSection } from './styles';

export default function UpdateUserPage(event: FormEvent) {

    const { id }: any = useParams();
   
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');
    
   

    function handleEdit() {
        
       

        const userUpdated = {
            phone,
            email,
            role,
            login,
            password,
            confirmedPassword
        };
        

        api.put(`/users/${id}`, userUpdated)
        //alert("Usuario atualizado com sucesso")

        
    }



    return (
        <Container>

            <Form>
                <h3>Alterar Usuário</h3>
                <FormBlock>
                    <MainSection>

                        <p>Telefone: </p>
                        <input 
                        type="text" 
                        value={phone}
                        onChange={event =>setPhone(event.target.value)}
                        />

                        <p>Login: </p>
                        <input 
                        type="text" 
                        value={login} 
                        onChange={event =>setLogin(event.target.value)}/>

                        <p>Senha: </p>
                        <input 
                        type="text" 
                        value={password} 
                        onChange={event =>setPassword(event.target.value)}/>


                          

                    </MainSection>

                    <SecondSection>

                       
                    <p>Email: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={event =>setEmail(event.target.value)}
                        />

                        <p>Cargo:</p>
                        <select value={role} onChange={event => setRole(event.target.value)}>
                            <option value="Atendimento">Atendimento</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                        
                        
                        <p>Confirmar Senha: </p>
                        <input 
                        type="text" 
                        value={confirmedPassword} 
                        onChange={event =>setconfirmedPassword(event.target.value)}/>

                    </SecondSection>
                    <br /> 
                  
              
                </FormBlock>
                
                <Link to='/users'><button id="buttonCancel" type="reset">Cancelar</button></Link> <button id="form-btn" type="submit" onClick={handleEdit}>Alterar</button>

            </Form>
        </Container>
    )
}