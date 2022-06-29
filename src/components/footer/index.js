import React from 'react';
import { Container } from '..';
import Logo from "../../assets/images/logo-domvsit-atualizado.svg";
import Instagram from "../../assets/images/logo-instagram.svg";
import Linkedin from "../../assets/images/logo-linkedin.svg";
import Spotify from "../../assets/images/logo-spotfy.svg";
import Gptw from '../../assets/images/selo-gptw.svg'
import Abes from '../../assets/images/selo-abes.png'
import { i18n } from '../multi-lingual/translate/i18n';

const Footer = () => {

    return(
        <Container type='fluid'>
            <Container type='box'  className={['footer']}>
            <div className='left-footer'>
                <ul>
                    <li>
                        <a href='#home'>
                            <img src={Logo} alt='Domvs iT logo' title='Logotipo Domvs iT' className='logo-atualizado' />
                        </a>
                    </li>
                        
                    <li>
                        <p className='logo-subtitle'>
                        {i18n.t('footer.logoSubtitle')}
                        </p>
                    </li>

                    <div className='selos'>
                        <ul>
                            <li>
                                <div className='selo-gptw'>
                                    <img src={Gptw} alt='Selo GPTW' title='Selo GPTW' className='logo-footer' />
                                </div>
                            </li>
                            <li>
                                <div className='selo-abes'>
                                    <img src={Abes} alt='Selo ABES' title='Selo ABES' className='selo-footer' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </ul>

            </div>
            

            <div className='mid-footer'>
                <ul>
                    <li>
                        <p className='mid-title' >{i18n.t('footer.midTitle')}</p>
                    </li>
                    <li>
                        <p className='mid-title'>São Paulo - SP</p>
                        <p className='mid-content'>{i18n.t('footer.midContentSP')}</p>
                    </li>
                    <li>
                    <p className='mid-title'>São Carlos - SP </p>
                    <p className='mid-content'>{i18n.t('footer.midContentSCL')}</p>
                    </li>
                    <li>
                        <p className='mid-title'>Porto Alegre - RS</p>
                        <p className='mid-content'>{i18n.t('footer.midContentAlegre')}</p>
                    </li>
                    <li>
                        <p className='mid-title'>Rio de Janeiro - RJ</p>
                        <p className='mid-content'>{i18n.t('footer.midContentRio')}</p>
                    </li>
                    <li>
                        <p className='mid-title'>Lisboa - Portugal</p>
                        <p className='mid-content'>{i18n.t('footer.midContentPort')}</p>
                    </li>
                    
                </ul>
            </div>

            <div className='right-footer'>
                <ul>
                    <li className='right-title'>
                        {i18n.t('footer.rightFooter')}
                    </li>
                    <li>
                        <a href='https://www.instagram.com/domvsit/' target="blank">
                            <img src={Instagram} alt='Logo Instagram' title='Logotipo instagram' className='icones-footer' />
                            <span className='title-icon-footer'>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://br.linkedin.com/company/domvs-tecnologia-da-informa%C3%A7%C3%A3o-ltda' target="blank">
                            <img src={Linkedin} alt='Logo Linkedin' title='Logotipo Linkedin'  className='icones-footer'/>
                            <span className='title-icon-footer'>Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://open.spotify.com/show/2xjebvCAkBvF7UxvYwqzlw?si=b1f03ad704284245' target="blank">
                            <img src={Spotify} alt='Logo Spotify' title='Logotipo Spotify' className='icones-footer'/>
                            <span className='title-icon-footer'>Spotify</span>
                        </a>
                    </li>
                </ul>
            </div>
            </Container>
        </Container>
    )
}

export default Footer;
