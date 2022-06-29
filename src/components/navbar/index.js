import React, { useState } from "react";
import Logo from "../../assets/images/logo-domvsit-atualizado.svg";
import MenuIcon from "../../assets/images/menu-burger.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { Container } from "..";
import MultiLanguage from "../multi-lingual";
import SelectLenguageMobile from '../select-linguas-mobile';
import { i18n } from "../multi-lingual/translate/i18n";

const Navbar = () => {
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <Container type='fluid'>
      <nav className='nav-bar'>
        <Container type='box' className={[`navbar-box ${show ? '-open' : '-close'}`]}>
          <a href='#home' className='logo'to="/">
            <img src={Logo} alt='Domvs iT logo' title='Logotipo Domvs iT' className="logo-atualizado"/>
          </a>
          <div className="menumobile-icon">
            {
              !show ?
                <img src={MenuIcon} alt="" onClick={() => setShow(!show)}/> :
                <img src={CloseIcon} alt="" onClick={() => setShow(!show)}/>
            }
          </div>
          <ul className='menu-icons'>
            
            <li
              className="menu-text"
              onClick={show ? handleShow : null}
            >
              
              <a  href="/">{i18n.t('navbar.home')}</a>
            </li>
            
            <li
              onClick={show ? handleShow : null}
            >
              <a href="/#quem-somos">{i18n.t('navbar.QuemSomos')}</a>
            </li>
            <li
              onClick={show ? handleShow : null}
            >
              <a href="/#servico-titulo">{i18n.t('navbar.Servicos')}</a>
            </li>

            <li
              onClick={show ? handleShow : null}
            >
              <a href="cases">{i18n.t('navbar.Cases')}</a>
            </li>

            <li onClick={show ? handleShow : null}>
              <a  href='https://domvsserviceit.compleo.com.br/' target='_blan'> {i18n.t('navbar.Carreira')}
              </a>

            </li>

            <li
              onClick={show ? handleShow : null}
            >
              <a href='/#news'>{i18n.t('navbar.News')}</a>
            </li>
            <li
              onClick={show ? handleShow : null}
            >
              <a href='/#contato'>{i18n.t('navbar.Contato')}</a>
            </li>
            
            <li className="select-lingua">
              <MultiLanguage/>
            </li>

            <div className="select-mobile">
              <SelectLenguageMobile/>
            </div>
          </ul>

        </Container>
      </nav>
      
    </Container>
  );
};

export default Navbar;