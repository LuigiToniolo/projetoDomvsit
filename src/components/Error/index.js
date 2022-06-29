import React from 'react';

const Error = () => {
    return(
            <div className='error'>
                <h1 className='error-404'> Error 404</h1>
                
                <h2 className='error-vaga'>Vaga não localizada</h2>
                <h3 className='error-404-domvsit'>DOMVS iT </h3>
                <h4 className='error-404-domvsit' > Tecnologia e agilidade impulsionando o seu negócio.</h4>
                <p className='error-page-home-paragrafo'>
                    Click no link 
                 <a className='error-page-home-link' href='../'> DOMVS iT </a>
                    para conhecer nossa página ou conferir nossas vagas em 
                    <a className='error-page-home-link' href='../../carreiras'> CARREIRAS. </a> 
                    </p>
                
            </div>
    );
}
export default Error;