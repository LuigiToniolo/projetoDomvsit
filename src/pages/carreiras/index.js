import React, { useEffect } from "react";
import { Container } from '../../components';

import NavBarCarreiras from "../../components/navbar-carreiras";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {
  vagasState,
  carregarVagasDaAPI
} from './carreirasSlice';
import Busca from "../../components/paginacaonew/search";

const Carreiras = () => {
  const vagas = useSelector(vagasState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarVagasDaAPI())
  },);

  return (
    <main id="carreiras">
      <NavBarCarreiras/>

      <Container type='box' className={['breadcrumb']}>
        <div>
            <Link className='breadcrumb-text' to="/carreiras">Carreiras</Link><br /><br/>
        </div>
      </Container>
        
        <div className="left-container">

        </div>
        
        <Container type='box' className={['pesquises-container']}>
            <Busca vagas={vagas.vagas} />
        </Container>     
    </main>
  );
};
export default Carreiras;




