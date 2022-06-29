import React from 'react';
import Logo from "../../assets/images/domvsLogo.svg";
import { Container } from '../../components';
import {Link} from 'react-router-dom';

const Carreiras = () => {
    return (
        <main id="carreiras">
            
            <Container type='box'>

            <nav className='navbar-carreiras'>

                <div className='logo-domvs'>
                    <Link to="/">
                        <img src={Logo} alt='Domvs iT logo' title='Logotipo Domvs iT' />
                    </Link>
                </div>
            </nav>

            </Container>
        </main>
    );
}
export default Carreiras;

