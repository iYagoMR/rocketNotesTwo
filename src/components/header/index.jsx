import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header(){
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/iYagoMR" 
                    alt="user photo" 
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Iago Romao</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}

