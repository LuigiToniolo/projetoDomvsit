import React from 'react';
import { Container } from '../../layout/container';
import { i18n } from '../../multi-lingual/translate/i18n';
import engrenagem from '../../../assets/images/engineering.svg';

const ConsultoriaEmNegocioCase = () => {
    
    return(

        <Container type='fluid' className={['aboutus-Consult-container']}>
          <article className='aboutus-boxConsultCase'>
            <p className='bigtext'>
            {i18n.t('aboutusBoxConsultCases.message1')}<br/>
            {i18n.t('aboutusBoxConsultCases.message2')}
            </p>
            <p className='simple-text'>
            {i18n.t('aboutusBoxConsultCases.message3')}
            </p>
          </article>
          <article className='aboutus-infos-consult'>
          <div className='title-cases'>
              <h4 className='title-h4'>{i18n.t('aboutusInfosTitleConsultCase.message1')}</h4>
               <p className='title-p'>{i18n.t('aboutusInfosTextConsultCase.message1')} </p>
            </div>
            <div className='title-cases'>
              <h4 className='title-h4'>{i18n.t('aboutusInfosTitleConsultCase.message2')}</h4>
               <p className='title-p'>{i18n.t('aboutusInfosTextConsultCase.message2')} </p>
            </div>
            <div className='title-cases'>
              <h4 className='title-h4'>{i18n.t('aboutusInfosTitleConsultCase.message3')}</h4>
               <p className='title-p'>{i18n.t('aboutusInfosTextConsultCase.message3')} </p>
               <p className='title-p'>{i18n.t('aboutusInfosTextConsultCase.message4')} </p>
            </div>
            <div className='title-cases'>
              <h4 className='title-h4'>{i18n.t('aboutusInfosTitleConsultCase.message4')}</h4>
            </div>
            <div className='infos-container'>
                <div className='info-boxConsultCase'>
                    <img src={engrenagem} className='info-icon' alt=''/>
                    <p className='text-card'> <strong> {i18n.t('infoIcon1EngrenagemCase.message')}</strong></p>
                </div>
            </div>
          </article>
        </Container>
    )
}
export default ConsultoriaEmNegocioCase;