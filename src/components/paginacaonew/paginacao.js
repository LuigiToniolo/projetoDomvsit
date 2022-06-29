import React from 'react';
import leftArrow from '../../assets/images/left-arrow.svg';
import rightArrow from '../../assets/images/right-arrow.svg';

const MAX_ITEMS = 7;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const Paginacao = ({
  per_page,
  total,
  page,
  onPageChange,
  currentPage
}) => {
  const pages = Math.ceil(total / per_page);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(currentPage - MAX_LEFT, 1),
    maxFirst
  );
  function _onPageChange(page) {
    onPageChange(page);
  }
  return (
    <ul className="pagination">
      <li className='botaoUnico' hidden={currentPage === 1}>
        <button
          onClick={() => _onPageChange(page - 1)}
          >
          <img className={"img-botaoAnterior"} src={leftArrow} alt="imagem de botão" /> Anterior
        </button>
      </li>

      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li className='botaoNumero'
            key={page}>
            <button
              onClick={() => _onPageChange(page)}
              className={ page === currentPage ? `pagination-marked` : null}>
              {page}
            </button>
          </li>
        ))}
      <li className='botaoUnico' hidden={currentPage === pages}>
        <button
          onClick={() => _onPageChange(page + 1)}
          > Próxima <img className={'img-botaoProximo'} src={rightArrow} alt="imagem de botão"/>
        </button>
      </li>
    </ul>
  );
};
export default Paginacao;