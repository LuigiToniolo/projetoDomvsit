import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { i18n } from '../multi-lingual/translate/i18n';
import colaboradores from '../../assets/images/icon-colaboradores.svg';
import locais from '../../assets/images/icon-locais.svg';
import mercados from '../../assets/images/icon-mercados.svg';
import aws from '../../assets/images/logo-aws.svg';
import delphix from '../../assets/images/logo-delphix.svg';

const CarrosselInfoBox = () => {
return(
<div className='Carrossel-info-box'>
  
  <Carousel>

    <div className='primeiro-card'>

      <div className='info-box'>
        <img src={mercados} className='info-icon' alt=''/>
        <p className='text-card'> {i18n.t('infoIcon1.message1')} <strong> {i18n.t('infoIcon1.message2')} </strong> {i18n.t('infoIcon1.message3')} <strong> {i18n.t('infoIcon1.message4')}.</strong></p>
      </div>

      <div className='info-box'>
        <img src={aws} className='info-icon' alt=''/>
        <p className='text-card'> {i18n.t('infoIcon4.message1')} <strong> {i18n.t('infoIcon4.message2')} </strong></p>
      </div>

    </div>

    <div className='segundo-card'>

    <div className='info-box'>
          <img src={delphix} className='info-icon' alt='' />
          <p className='text-card'> {i18n.t('infoIcon5.message1')} <strong> {i18n.t('infoIcon5.message2')} </strong> {i18n.t('infoIcon5.message3')} <strong> {i18n.t('infoIcon5.message4')}.</strong></p>
        </div>

      <div className='info-box'>
        <img src={locais} className='info-icon' alt=''/>
        <p className='text-card'> {i18n.t('infoIcon3.message1')} <strong> {i18n.t('infoIcon3.message2')} </strong> {i18n.t('infoIcon3.message3')} <strong> {i18n.t('infoIcon3.message4')}.</strong></p>
      </div>

      </div>

      <div className='terceiro-card'>

      <div className='info-box'>
        <img src={colaboradores} className='info-icon' alt='' />
        <p className='text-card'> <strong> {i18n.t('infoIcon2.message1')} </strong></p>
      </div>
    </div>

  </Carousel>

</div>
  );
}

export default CarrosselInfoBox;