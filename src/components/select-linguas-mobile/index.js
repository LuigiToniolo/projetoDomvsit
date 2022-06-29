import Brasil from '../../assets/images/Flag-Brazil.svg'
import EstadosUnidos from '../../assets/images/Flag-US.svg';
import Espanha from '../../assets/images/Flag-Spain.svg';
import Portugal from '../../assets/images/Flag-Portugal.svg'


const I18N_STORE_KEY = 'i18nextLng';
  
function SelectLenguageMobile() {

    const handleSelectChance = (value) => {
      localStorage.setItem(I18N_STORE_KEY, value);
      console.log("Linguagem",value);
      document.location.reload(true);
    };

    return(
        <>
        <div className='lista-linguas'>

            <button className="linha" onClick={() => handleSelectChance("pt-BR")}>
                <p>BR</p>
                <img className='bandeira' src={Brasil} alt='bandeira-brasil' title='bandeira-brasil'/>
            </button>

            <button className="linha" onClick={() => handleSelectChance("pt-PT")}>
                <p>PT</p>
                <img className='bandeira' src={Portugal} alt='bandeira-portugal' title='bandeira-portugal'/>
            </button>
 
            <button className="linha" onClick={() => handleSelectChance("es-ES")}>
                <p>ES</p>
                <img className='bandeira' src={Espanha} alt='bandeira-espanha' title='bandeira-espanha'/>
            </button>
            
            <button className="linha" onClick={() => handleSelectChance("en-US")}>
                <p>EN</p>
                <img className='bandeira' src={EstadosUnidos} alt='bandeira-estadosunidos' title='bandeira-estadosunidos'/>
            </button>
            
        </div>

        </>
    );
}

export default SelectLenguageMobile;