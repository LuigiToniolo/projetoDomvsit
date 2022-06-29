import React from 'react';

const FiltrosVagas = (props) => {
    
    return(
        <div className='lista-filtro'>
            <h1 className='lista-filtro-titulo'>{props.titulo}</h1>
            <p className='total-filtro-vagas'>{props.todas}</p>
             <ul className="lista-filtro-ul">
                <span className='lista-filtro-texto'>{props.total}</span>
                {props.filtros &&
                    props.filtros.map((filtroVaga, index) => (
                        <div className='listagem-filtro-li '>
                            <div className='listagem-filtro-div'>
                                <li key={index} className='listagem-filtro-principal'>
                                    {filtroVaga}
                                </li>
                            </div>
                        </div>
                    ))
                }
            </ul>

        </div>
    );
}

export default FiltrosVagas;