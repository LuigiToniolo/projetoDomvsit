import React from 'react';
import { i18n } from '../multi-lingual/translate/i18n';
const Verticais = () => {
    return (
        <div className='verticais verticais-conteudo'>
            <h1 className='verticais-titulo'>{i18n.t('verticaisTitulo.message1')} <br />{i18n.t('verticaisTitulo.message2')}</h1>
            <p className='verticais-texto'>{i18n.t('verticaisTexto.message')}</p>
        </div>
        
    )
}
export default Verticais;