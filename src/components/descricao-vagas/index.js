import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {Container,SiteSection} from '..';
import { carregarVagaDaAPI, selectVagaReducer } from '../../pages/carreiras/vagaSlice';
import LoadingDescrica from '../loading-descricao';

const MyJobs = () => {

    const {vaga} = useSelector(selectVagaReducer)// 
    const dispatch =  useDispatch();
    const match = useRouteMatch();//Retorna a rota que quero retornando um math
    const {id} = match.params;
    
    console.log("Vaga:", vaga);
    
    useEffect(()=>{
       dispatch(carregarVagaDaAPI(id)) 
    },)
    return (
        <SiteSection>
            <Container type='box'>
                <main id='vagas'>
                     {vaga && !vaga.id && <span className='carregamento-descricao'><LoadingDescrica/></span>}    
                    {
                            <div className='descricao'>
                                <h1 className='titulo-vaga' key={vaga.id}>{vaga.titulo}</h1>
                                <p className='conteudo-vaga' dangerouslySetInnerHTML={{ __html: vaga.informacoes }}></p>
                                
                            </div>
                    }
                </main>
        </Container>
        </SiteSection>
    )
}

export default MyJobs;