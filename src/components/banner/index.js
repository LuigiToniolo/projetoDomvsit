import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { SiteSection } from '../layout/section';
import { i18n } from '../multi-lingual/translate/i18n';
import { Container } from '../layout/container';
import globo from '../../assets/images/domvs_globe.svg';

export const Banner = (props) => {

    return (
        <SiteSection className={['banner-home']}>
            <div className={['container-banner-home']}>
                <h1 className='title'>
                    <ReactTypingEffect
                        className='typing'
                        typingDelay={100}
                        text={props.words}
                    />
                    
                    <br />
                    {i18n.t('sectionTitle.message')}
                </h1>
                <p className='subTitleSection'>{i18n.t('subTitleSection.message')}</p>
                   <a className = "time-button" href='#contato' >
                      <span className='buttonHome'>{i18n.t('buttonHome.message')}</span> 
                    </a>
            </div>
            <div className='container_globo_domvsit'>
                <img className='globo_domvsit' src={globo} alt="Logotipo Globo da empresa"/>
            </div>
        </SiteSection>
    )
}
