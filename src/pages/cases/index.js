import React from 'react';
import whatsapp from '../../assets/images/logo-whatsapp.svg';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ContactForm from '../../components/contact';
import { BannerCases } from '../../components/ComponentsCase/banner-cases';
import  SquadSection from '../../components/ComponentsCase/squad-section'; 
import ConsultoriaEmNegocioCase from '../../components/ComponentsCase/consultoriaEmNegocioCase';
import InovacaoUiUx from '../../components/ComponentsCase/inovacaoUiUx';

const Cases = () => {
  return (
    <main id='cases'>
      <Navbar/>
      <BannerCases/>
      <SquadSection/>
      <InovacaoUiUx />
      <ConsultoriaEmNegocioCase />
          <div className='logowhats'>
              <a href="https://api.whatsapp.com/send?phone=5511912403817" target="blank">
                  <img src={whatsapp} alt='botão com logo do whatsapp'/>
              </a>
          </div>

          <div id='contact'>
            <ContactForm/>
          </div>

        <Footer/>
        </main>
  );
}

export default Cases;