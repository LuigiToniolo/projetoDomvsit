import React, {useState} from 'react';
import ArrowDown from "../../assets/images/seta-acordeon-baixo.svg";
import ArrowUp from "../../assets/images/seta-acordeon-cima.svg";
import { i18n } from '../multi-lingual/translate/i18n';
const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className={selected === i ? 'item show' : 'item'} key={item.titulos} onClick={()=> toggle(i)}>
                        <div className='title' onClick={()=> toggle(i)}>
                            <p>{item.titulos}</p>
                            <span>
                                {selected === i ? <img src={ArrowUp} alt='Seta-Acordeon-cima'/> : <img src={ArrowDown} alt='Seta-Acordeon-baixo'/>}
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'} >
                            <p>{item.conteudo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const data = [
    {
        titulos: `${i18n.t('accordion1.titulos')}`,
        conteudo: `${i18n.t('accordion1.conteudo')}`
    },
    {
        titulos: `${i18n.t('accordion2.titulos')}`,
        conteudo: `${i18n.t('accordion2.conteudo')}`
    },
    {
        titulos: `${i18n.t('accordion3.titulos')}`,
        conteudo: `${i18n.t('accordion3.conteudo')}`
    },
    {
        titulos: `${i18n.t('accordion4.titulos')}`,
        conteudo: `${i18n.t('accordion4.conteudo')}`
    },
    {
        titulos: `${i18n.t('accordion5.titulos')}`,
        conteudo: `${i18n.t('accordion5.conteudo')}`
    }
]
export default Accordion;