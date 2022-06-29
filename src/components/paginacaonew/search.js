import React, { useEffect, useState, useRef, useReducer } from 'react';
import qs from 'qs';
import Paginacao from './paginacao';
import BuscaEntrada from './input-search';
import { Link } from 'react-router-dom';
import api from '../../pages/carreiras/carreirasApi';
import LoadingSearch from '../loading-search';
import { Container } from '..';
import FiltrosVagas from '../filtro-vagas';

const Busca = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [info, setInfo] = useState({});
  const [per_page] = useState(8);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [city] = useState(queryParams.get('city'));
  const [state] = useState(queryParams.get('state'));
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  const query = useRef({
    page,
    title,
    per_page,
  });

  useEffect(() => {
    setInfo({});
    query.current.page = page;
    query.current.city = city;
    query.current.state = state;
    
    api
    .get(`?${qs.stringify(query.current)}`, {})
      .then((response) => {
        setInfo(response.data);
      })
      .catch(function(err) {
        if (err.response) {
          console.error("Res Error: ", err.response.status);
          window.location.assign("./")
        } else if (err.request) {
          console.error("Req Error");
          window.location.assign("../")
        } else {
          console.error("Error: ", err.message);
          window.location.assign("./")
        }
      })
  }, [city, state, page, per_page, ignored]);

  useEffect(() => {
    query.current.title = title;
    query.current.page = 1;
    
    setPage(1);
    forceUpdate();
  }, [title])

  return (
    <div className="paginacao-pesquisa">
      <div className='filtro-container-principal'>
        <BuscaEntrada
          value={title}
          onChange={(search) => {setTitle(search);}}
        />
        {info.vacancies &&
        <Container type='box' className={['filtros-vagas-regiao']}>
          <FiltrosVagas
            total={!title ? <span style={{padding:'9px 25px',background:'white', borderRadius:'4px'}}>Todos</span> : <span style={{padding:'9px 25px', background:'linear-gradient(90deg, #2A3252 0%, #495170 103%)',color:'white', borderRadius:'4px'}}>Todos</span>}
            titulo='Estados'
            filtros={info.filters['Estados']}
          />
          <FiltrosVagas
            total={!title ? <span style={{padding:'9px 25px',background:'white', borderRadius:'4px'}}>Todos</span> : <span style={{padding:'9px 25px', background:'linear-gradient(90deg, #2A3252 0%, #495170 103%)',color:'white', borderRadius:'4px'}}>Todos</span>}
            titulo='Cidades'
            filtros={info.filters['Cidades']}
          />
          <FiltrosVagas
            total={!title ? <span style={{padding:'9px 25px',background:'white', borderRadius:'4px'}}>Todos</span> : <span style={{padding:'9px 25px', background:'linear-gradient(90deg, #2A3252 0%, #495170 103%)',color:'white', borderRadius:'4px'}}>Todos</span>}
            titulo='Experiência'
            filtros={info.filters['Nível de experiência']}
          />
        </Container>
        }
      </div>
      {!title && !info.vacancies && <span className='carregamento'><LoadingSearch /></span>}
      {title && !info.vacancies && <span className='carregamento'><LoadingSearch  /></span>}
      <div className='paginacao-div'>
        {info.vacancies && (
          <ul className="lista-vagas">
            {info.vacancies.map((vaga) => (
            <div className='vagas-li'>
                <div className='textos-lista-vaga'>
                  <li key={vaga.experiencia} className='titulo-lista-vagas'>
                    {vaga.titulo}
                  </li>
                  <li className='texto-lista-vagas' >
                  {vaga.cidade && vaga.estado ? `Local: ${vaga.cidade} / ${vaga.estado} `: null} 
                  </li>
                  <li className='texto-lista-vagas' >
                    Experiência: {vaga.experiencia} 
                  </li>
                </div>
                <div className='botao-lista'>
                <Link onClick={() => window.localStorage.setItem('vaga', JSON.stringify(vaga))} 
                        className='botao-visualizar' to={{pathname:`/carreiras/${vaga.id}`}}>
                  <li>
                    Visualizar vaga
                  </li>
                  
                </Link>
            </div>
            </div>
          ))}
           {!info.total && <p>Vaga Encontrada</p>}
          </ul>
          )}
            {info.total && (
               <div className='container-paginacao'>
                <Paginacao
                page = {page}
                total={info.total}
                per_page={per_page}
                onPageChange={setPage}
                currentPage = {info.currentPage}
                />
                </div>
            )}
      </div>
    </div>
  );
}
export default Busca;
