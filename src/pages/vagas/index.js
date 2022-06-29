import React, {useEffect, useState} from "react";
import { Container } from "../../components";
import NavBarCarreiras from "../../components/navbar-carreiras";
import DescricaoVagas from "../../components/descricao-vagas";
import FormularioCadastro from "../../components/formulario-cadastro";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectVagaReducer } from "../carreiras/vagaSlice";

const Vagas = (props) => {
  const [mostrarComponente, setMostrarComponente] = useState(true)

const {vaga} = useSelector(selectVagaReducer)

useEffect( () => {
  if(mostrarComponente === false){
    window.location.href = '/carreiras';
  }
  return () => { }

},[mostrarComponente])

  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }),

    
    <main id="vagas">

      {console.log(props.location.state)}
      <NavBarCarreiras/>

      <Container type='box'>
          <div className='breadcrumb'>
            <button  className="breadcrumb-text-button" value='teste'  onClick={() => setMostrarComponente(!mostrarComponente)}>Carreiras /</button>
            <Link className='breadcrumb-text' to="/carreiras"> Detalhes Vaga</Link>
          </div>
        </Container>
        <Container id='vagas' type='box' className={['cadastrar-container']}>
          <Container type='fluid' className={['cadastrar-vaga']}>
            <div className={mostrarComponente ? "show-element" : null}>
              {mostrarComponente && <DescricaoVagas job={props.location.state}/>}
            </div>
          </Container>
          <Container type='fluid' className={['cadastrar-formulario']}>
            {mostrarComponente && vaga.id && <span className='carregamento-descricao'><FormularioCadastro/></span>}  
          </Container>
      </Container>
    </main>
  );
};

export default Vagas;




