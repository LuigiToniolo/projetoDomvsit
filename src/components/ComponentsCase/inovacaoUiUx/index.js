import React from 'react';
import { Container } from '../../layout/container';
import { i18n } from '../../multi-lingual/translate/i18n';
import diamond from '../../../assets/images/diamond.svg';
import node from '../../../assets/images/node.svg';
import vue from '../../../assets/images/vue.svg';

const inovacaoUiUx = () => {
    
    return(

        <Container type='fluid' className={['aboutus-Inovation-container']}>
          <article className='aboutus-infos-inovation'>
            <div className='title-cases'>
                <h4 className='title-h4'>{i18n.t('aboutusInfosTitleInovationCase.message1')}</h4>
                <p className='title-p'>{i18n.t('aboutusInfosTextInovationCase.message1')} </p>
                </div>
                <div className='title-cases'>
                <h4 className='title-h4'>{i18n.t('aboutusInfosTitleInovationCase.message2')}</h4>
                <p className='title-p'>{i18n.t('aboutusInfosTextInovationCase.message2')} </p>
                </div>
                <div className='title-cases'>
                <h4 className='title-h4'>{i18n.t('aboutusInfosTitleInovationCase.message3')}</h4>
                <p className='title-p'>{i18n.t('aboutusInfosTextInovationCase.message3')} </p>
                </div>
                <div className='title-cases'>
                <h4 className='title-h4'>{i18n.t('aboutusInfosTitleInovationCase.message4')}</h4>
                </div>
                <div className='infos-container'>
                    <div className='info-boxInovationCase'>
                        <img src={diamond} className='info-icon' alt=''/>
                        <p className='text-card'> <strong> {i18n.t('infoIcon1InovationCase.message1')}</strong></p>
                    </div>
                    <div className='info-boxInovationCase'>
                        <img src={node} className='info-icon' alt=''/>
                        <p className='text-card'> <strong> {i18n.t('infoIcon1InovationCase.message2')}</strong></p>
                    </div>
                    <div className='info-boxInovationCase'>
                        <img src={vue} className='info-icon' alt=''/>
                        <p className='text-card'> <strong> {i18n.t('infoIcon1InovationCase.message3')}</strong></p>
                    </div>
                </div>
            </article>
          <article className='aboutus-boxInovationCases'>
            <p className='bigtext'>
            {i18n.t('aboutusBoxInovationCases.message1')}
            </p>
            <p className='simple-text'>
            {i18n.t('aboutusBoxInovationCases.message2')}
            </p>
          </article>
        </Container>
    )
}
export default inovacaoUiUx;