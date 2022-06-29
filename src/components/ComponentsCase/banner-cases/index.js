import React from 'react';
import { i18n } from '../../multi-lingual/translate/i18n';
import globo from '../../../assets/images/domvs_globe.svg';
import { SiteSection } from '../../layout/section';

export const BannerCases = (props) => {

    return (
        <SiteSection className={['banner-home']}>
            <div className={['container-banner-home']}>
                <h1 className='title'>
                    {i18n.t('sectionTitleCases.message')}
                </h1>
                <p className='subTitleSection'>{i18n.t('subTitleSectionCases.message')}</p>
            </div>
            <div className='container_globo_domvsit'>
                <img className='globo_domvsit' src={globo} alt="Logotipo Globo da empresa"/>
            </div>
        </SiteSection>
    )
}