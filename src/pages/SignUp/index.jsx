import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Form, Background } from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name || !email || !password){
            return alert("Você esqueceu de preencher um campo.")
        }

        const newUser = {
            name,
            email,
            password
        }

        await api.post("/users", newUser).then(() => {
            alert("Usúario cadastrado com sucesso!");
        })
        .catch(error => {
            if(error.response.data.message){
                alert(error.reponse.data.message);
            }else{
                alert("Não foi possível fazer o cadastro.")
            }
        })

        navigate("/");
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    Voltar para login
                </Link>

            </Form>


        </Container>
    )
}