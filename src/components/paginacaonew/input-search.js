import React, { useState } from 'react';
import useDebounce from './usedebounce';
import Lupa from '../../assets/images/lupa.svg'

const BuscaEntrada = ({ value, onChange, ...props }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 800);
  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
    <div className='container-pesquisa'>
      <div className='formulario-pesquisa'>
        <input
          className='barra-pesquisa'
          {...props}
          type="search"
          value={displayValue}
          onChange={handleChange}
    
          placeholder='Pesquise aqui a sua vaga desejada'
        />
        <button className='botao' >
          <img 
            className='lupa' 
            src={Lupa} 
            alt='Lupa de Pesquisa' 
            title='Lupa de Pesquisa' 
          />
        </button>
      </div>
    </div>
  );
};
export default BuscaEntrada;
