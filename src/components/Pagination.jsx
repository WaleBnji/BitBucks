// import React from 'react';
import paginationArrow from '../assets/pagination-arrow.svg';
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const Pagination = () => {
  const { page, setPage } = useContext(CryptoContext);
  const totalPages = 100;

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      return setPage(page - 1);
    }
  };
  const next = () => {
    if (page === totalPages) {
      return null;
    } else {
      return setPage(page + 1);
    }
  };
  const multistepNext = () => {
    if (page + 3 >= totalPages) {
      setPage(totalPages - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multistepPrev = () => {
    if (page - 3 <= 1) {
      return setPage(totalPages + 1);
    } else {
      setPage(page - 2);
    }
  };
  return (
    <div>
      <ul className='flex items-center justify-end space-x-4 text-sm'>
        <li>
          <button className='outline-none' onClick={prev}>
            <img
              src={paginationArrow}
              alt='left'
              className='rotate-180 w-full h-auto'
            />
          </button>
        </li>
        {page > 5 ? (
          <li>
            <button
              className='outline-none hover:text-cyan'
              onClick={multistepPrev}
            >
              ...
            </button>
          </li>
        ) : null}
        {page - 1 !== 0 ? (
          <li>
            <button
              onClick={prev}
              className='outline-none hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 p-2'
            >
              {page - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button
            disabled
            className='outline-none hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-[#000] p-2'
          >
            {page}
          </button>
        </li>
        {page !== totalPages ? (
          <li>
            <button
              onClick={next}
              className='outline-none hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 p-2'
            >
              {page + 1}
            </button>
          </li>
        ) : null}
        {page + 1 !== totalPages &&
        page !== totalPages &&
        page + 2 !== totalPages ? (
          <li>
            <button
              className='outline-none hover:text-cyan rounded-full'
              onClick={multistepNext}
            >
              ...
            </button>
          </li>
        ) : null}
        {page !== totalPages &&
        page + 1 !== totalPages &&
        page + 2 !== totalPages ? (
          <li>
            <button
              onClick={() => setPage(totalPages)}
              className='outline-none hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 p-2'
            >
              {totalPages}
            </button>
          </li>
        ) : null}
        <li>
          <button className='' onClick={next}>
            <img src={paginationArrow} alt='right' className='w-full h-auto' />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;