import React from 'react';
import Carousel from 'react-elastic-carousel';
import consultoria from '../../assets/images/consulting-icon.svg';
import squad from '../../assets/images/squad-icon.svg';
import professional from '../../assets/images/professional-icon.svg';
import hunting from '../../assets/images/hunting-icon.svg';
import aws from '../../assets/images/new-aws.png';
import delphix from '../../assets/images/new-delphix.png';
import trabalho from '../../assets/images/new-trabalho-em-equipe.png';
import { Container } from '..';
import { i18n } from '../multi-lingual/translate/i18n';

const Carrossel = () => {
  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
    {width: 1500, itemsToShow: 3}
  ]
  return(
    <Container type ='fluid' >
        <div id ='servicos-carrossel'>
          <Carousel breakPoints={breakPoints} className='carrossel'>
          <div className='card'>
              <div className='card-box'>
                  <img src={squad} className='info-icon card-img' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel2.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel2.cardText')}</p>
              </div>
            </div>
            <div className='card'>
                <div className='card-box'>
                  <img src={trabalho} className='card-info-trabalho' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel7.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel7.cardText')}</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-box'>
                  <img src={delphix} className='card-info-delphix' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel5.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel5.cardText')}</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-box'>
                  <img src={aws} className='card-info-aws' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel6.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel6.cardText')}</p>
                </div>
            </div>
            <div className='card'>
              <div className='card-box'>
                <img src={consultoria} className='info-icon card-img' alt='' />
                <h3 className='card-titulo'>{i18n.t('cardcarrossel1.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel1.cardText')}</p>
              </div>
            </div>
            <div className='card'>
                <div className='card-box'>
                  <img src={professional} className='info-icon card-img' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel3.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel3.cardText')}</p>
                </div>
              </div>
            <div className='card'>
                <div className='card-box'>
                  <img src={hunting} className='info-icon card-img' alt='' />
                  <h3 className='card-titulo'>{i18n.t('cardcarrossel4.cardTitle')}</h3>
                <p className='card-text'>{i18n.t('cardcarrossel4.cardText')}</p>
                </div>
            </div>
       </Carousel>
      </div>
    </Container>
  );
}
export default Carrossel;
