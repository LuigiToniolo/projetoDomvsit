import React, {useEffect} from "react";
import { Container } from "../../components";
import NavBarCarreiras from "../../components/navbar-carreiras";
import { Link, useHistory } from "react-router-dom";
import DescricaoVagas from "../../components/descricao-vagas";
import FormularioCadastro from "../../components/formulario-cadastro";


const Cadastro = (props) => {
  const history = useHistory();

  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }),  
    <main id="cadastro">
      {console.log(props.location.state)}
      <NavBarCarreiras/>

      <Container type='box'>
        <div className='breadcrumb'>
            <Link className='breadcrumb-text-vagas' to="/carreiras" >Carreiras / </Link>
            
            <button className='breadcrumb-text-button' onClick={() => history.goBack()}>Detalhe / </button>
            <Link className='breadcrumb-text' to="/carreiras/vagas/cadastro"> Cadastro</Link>
        </div>
      </Container>
        
        <Container id='vagas' type='box' className={['cadastrar-container']}>
        <Container type='fluid' className={['cadastrar-vaga']}>
          <DescricaoVagas job={props.location.state}/>
        </Container>
        <Container type='fluid' className={['cadastrar-formulario']}>
          <FormularioCadastro/>
        </Container>
        </Container>

    </main>
  );
};

export default Cadastro;