import React from 'react';
import { Container } from '..';
import {Link} from 'react-router-dom';

const FooterVagas = ({vaga}) => {

    function HabiDsabi() {
        if (document.getElementById('habi').checked === true) {
          document.getElementById('envia').disabled = ""
          document.querySelector('.btn-terciary').style.cursor='pointer';
          document.querySelector('.btn-terciary').style.backgroundColor="#FFFFFF";
          
        }
        if (document.getElementById('habi').checked === false) {
          document.querySelector('.btn-terciary').style.backgroundColor="#868ba0"
          document.getElementById('envia').disabled = "disabled";
          
        }
      }
    return (
        <Container type='fluid'>
            <Container type='box'>

                <div className='footer-vagas'>
                    <div className="modal-body">
                    <form name="form1">
                    <p>
                        <input type="checkbox" name="habi" id="habi" className='checkbox' onClick={HabiDsabi} /> 
                        <span className='texto-checkbox'>Declaro que li e concordo com os termos de uso e a política de privacidade do Compleo.</span>
                    </p>
                    <Link to={{pathname:`/carreiras/vagas/${vaga.id}`,state:vaga}}><input action="https://google.com" type="button" className="btn-terciary"  name="envia" id="envia" value="Candidatar-me" disabled />
                    </Link>

                    </form>
                    </div>
                </div>

            </Container>
        </Container>
    );
}

export default FooterVagas;