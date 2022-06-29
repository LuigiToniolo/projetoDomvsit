import React, {useState} from 'react';
import ArrowDown from "../../assets/images/seta-acordeon-baixo.svg";
import ArrowUp from "../../assets/images/seta-acordeon-cima.svg";

const MenuBurger = () => {
    const [selected, setSelected] = useState(null)
    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className='wrapper'>
            <div className='menu-mobile'>
                {data.map((item, i) => (
                    <div className={selected === i ? 'menu show' : 'menu'}>
                        <div className='menu-title' onClick={()=> toggle(i)}>
                            <p>{item.titulos}</p>
                            <span>
                                {selected === i ? <img src={ArrowUp} alt='Seta-Acordeon-cima'/> : <img src={ArrowDown} alt='Seta-Acordeon-baixo'/>}
                            </span>
                        </div>
                        <div className={selected === i ? 'list show' : 'list'}>
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
        titulos: 'Desenvoldimento de Softwares',
        conteudo: 'Codificação da solução das mais variadas tecnologias do mercado de front end, back end mobile ou web.'
    },
]
export default MenuBurger;