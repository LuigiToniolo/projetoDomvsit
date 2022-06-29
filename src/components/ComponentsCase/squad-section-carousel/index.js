import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { i18n } from '../../multi-lingual/translate/i18n';
import sql from '../../../assets/images/sql.svg';
import java from '../../../assets/images/java-spring-boot.svg';
import kotlin from '../../../assets/images/kotlin.svg';
import kafka from '../../../assets/images/kafka.svg';

const SquadSectionCarousel = () => {
return(
<div className='Carrossel-info-box'>
  
  <Carousel>

    <div className='primeiro-card'>

      <div className='info-box'>
        <img src={java} className='info-icon' alt=''/>
        <p className='text-card-squad'> {i18n.t('squadCard.message1')} </p>
      </div>

      <div className='info-box'>
        <img src={kotlin} className='info-icon' alt=''/>
        <p className='text-card-squad'> {i18n.t('squadCard.message2')}</p>
      </div>

    </div>

    <div className='segundo-card'>

        <div className='info-box'>
          <img src={kafka} className='info-icon' alt='' />
          <p className='text-card-squad'> {i18n.t('squadCard.message3')}</p>
        </div>

      <div className='info-box'>
        <img src={sql} className='info-icon' alt=''/>
        <p className='text-card-squad'> {i18n.t('squadCard.message4')}</p>
      </div>

      </div>

  </Carousel>

</div>
  );
}

export default SquadSectionCarousel;