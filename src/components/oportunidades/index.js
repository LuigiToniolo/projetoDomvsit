import React from 'react';
import { Container } from '..';
import { i18n } from '../multi-lingual/translate/i18n';
const Oportunidade = () => {
    return (
        <Container type='fluid' className={['oportunidade']}>
            <Container type='box' className={['oportunidade-texts']}>
                <div className='oportunidade-text'>
                    <h1 className='oportunidade-title'>{i18n.t('oportunidadeText.oportunidadeTitle')}</h1>
                    <h3 className='oportunidade-subtitle'>{i18n.t('oportunidadeText.oportunidadeSubtitle')}</h3>
                </div>

                <li className="oportunidade-button">
                <a href="https://domvsserviceit.compleo.com.br/" className="oportunidade-button-interno" target="_blank" rel="noreferrer">{i18n.t('oportunidadeText.oportunidadeButton')}</a>    
                    {/* <Link className="oportunidade-button-interno" to="/carreiras">{i18n.t('oportunidadeText.oportunidadeButton')}</Link>*/}
                </li>
            </Container>
        </Container>
    )
}
export default Oportunidade;
