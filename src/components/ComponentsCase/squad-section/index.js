import React from 'react';
import { i18n } from '../../multi-lingual/translate/i18n';
import SquadSectionCarousel from '../squad-section-carousel';
import { Container } from '../../layout/container';


const SquadSection = (props) => {
    return(
        <Container type='fluid' className={['squad-container']}>

            <article className='squad-box'>
                <p className='bigtext'>
                {i18n.t('squadBox.message1')}
                </p>
                <p className='simple-text-squad'>
                {i18n.t('squadBox.message2')}
                </p>
            </article>

            <article className='squad-infos'>
                <div className='title-squad'>

                    <p className='subtitle-squad'>
                    {i18n.t('subtitleSquad.message1')}
                    </p>
                    <p className='description-squad'>
                    {i18n.t('descriptionSquad.message1')}
                    </p>

                    <p className='subtitle-squad'>
                    {i18n.t('subtitleSquad.message2')}
                    </p>
                    <p className='description-squad'>
                    {i18n.t('descriptionSquad.message2')}
                    </p>

                    <p className='subtitle-squad'>
                    {i18n.t('subtitleSquad.message3')}
                    </p>
                    <p className='description-squad'>
                    {i18n.t('descriptionSquad.message3')}
                    </p>

                    <p className='subtitle-squad'>
                    {i18n.t('subtitleSquad.message4')}
                    </p>

                </div>
                <div className='infos-container-squad'>
                    <SquadSectionCarousel/>
                </div>
            </article>
        </Container>
    )
}

export default SquadSection;

