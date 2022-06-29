import React from 'react';
import Carrossel from '../carrossel';
import Verticais from '../verticais';
import Accordion from '../accordion';
import { i18n } from '../multi-lingual/translate/i18n';

import { Container, SiteSection } from "..";


const Servicos = () => {
  return (
    <SiteSection className={['services-section']}>
      <Container type='fluid' className={['servico']}>
        <div className='servico-box'>
          <ul className='servico-conteudo'>
            <li>
              <p id ='servico-titulo'>{i18n.t('servicoTitulo.message')}</p>
            </li>
          </ul>
        </div>
        <Carrossel />
        <Container type='box' id="verticais">
          <Verticais />
          <Accordion />
        </Container>
      </Container>
    </SiteSection>
  )
}
export default Servicos;