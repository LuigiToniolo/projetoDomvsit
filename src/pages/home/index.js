import React from 'react';
// import colaboradores from '../../assets/images/icon-colaboradores.svg';
// import locais from '../../assets/images/icon-locais.svg';
// import mercados from '../../assets/images/icon-mercados.svg';
import Servicos from '../../components/services';
import Oportunidades from '../../components/oportunidades';
import ContactForm from '../../components/contact';
import { Banner, Container} from '../../components';
import Gptw from '../../assets/images/selo-gptw.svg';
import News from '../../components/news/index';
import Icone1 from '../../assets/images/icone1.svg';
import Icone2 from '../../assets/images/icone2.svg';
import Icone3 from '../../assets/images/icone3.svg';
import whatsapp from '../../assets/images/logo-whatsapp.svg';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { i18n } from '../../components/multi-lingual/translate/i18n';
import CarrosselInfoBox from '../../components/carrossel-info-box';
import { eventClickWhatsApp } from '../../components/googleAnalitics';

const Home = () => {
  return (
    <main id='home'>
      <Navbar/>
      <Banner words={[`${i18n.t('digitacao1.message')}`,`${i18n.t('digitacao2.message')}`]} />
        <Container type='fluid' id='quem-somos'>
          <h2 className={'section-title'}>{i18n.t('section.message')}</h2>
        </Container>
        <Container type='fluid' className={['aboutus-container']}>
          <article className='aboutus-box'>
            <p className='bigtext'>
            {i18n.t('aboutusBox.message1')}
            </p>
            <p className='simple-text'>
            {i18n.t('aboutusBox.message2')}
            <strong> {i18n.t('aboutusBox.message3')} </strong>
            {i18n.t('aboutusBox.message4')}
            </p>
            <p className='simple-text'>
            {i18n.t('')}
            {i18n.t('aboutusBox.message5')}
            </p>
          </article>
          <article className='aboutus-infos'>
            <div className='title'>
              <p>
              {i18n.t('aboutusInfos.message1')}
              <strong> {i18n.t('aboutusInfos.message2')} </strong>
              {i18n.t('aboutusInfos.message3')}
              <strong> {i18n.t('aboutusInfos.message4')} </strong>
              {i18n.t('aboutusInfos.message5')}
              </p>
            </div>
            <div className='infos-container'>
              <CarrosselInfoBox />
            </div>
          </article>
        </Container>
        <Container type='fluid' id='box-gptw'>
          <article className='gptw-content'>
            <div className='logo-gptw'>
              <img src={Gptw} alt='Domvs iT logo' title='Logotipo GPTW' className='selo' />
            </div>
            <div className='gptw-texts' >
              <h4 className='gptw-title'>
                {i18n.t('gptwTitle.message')}
              </h4>
              <p className='gptw-text'>
              {i18n.t('gptwText.message')}
              </p>
            </div>
          </article>
          <article className='differential-box'>
            <h4 className='diferenciamos-title'>{i18n.t('diferenciamosTitle.message')}</h4>
            <div className='diferenciamos-texts'>
              <img src={Icone1} alt='Icone 1' title='Icone 1'/>
              <p>
              {i18n.t('diferenciamosTexts.message1')}
              </p>
              <img src={Icone2} alt='Icone 2' title='Icone 2' className='icone-diferenciamos'/>
              <p>
              {i18n.t('diferenciamosTexts.message2')}
              </p>
              <img src={Icone3} alt='Icone 3' title='Icone 3' className='icone-diferenciamos'/>
              <p>
              {i18n.t('diferenciamosTexts.message3')}
              </p>
            </div>
          </article>
        </Container>
        
          <div id='servicos'>
            <Servicos />
          </div>
          <Oportunidades />
            <News />
          <div id='contact'>
            <ContactForm/>
          </div>

          <div className='logowhats' >
                <a href="https://api.whatsapp.com/send?phone=5511912403817"target="blank" onClick={eventClickWhatsApp}>
                  <img src={whatsapp} alt='botão com logo do whatsapp'/>
                </a> 
          </div>
        <Footer/>
        </main>
  );
}

export default Home;