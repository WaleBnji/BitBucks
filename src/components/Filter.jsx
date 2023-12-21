// import React from 'react'

import { useContext } from 'react';
import Currency from './Currency';
import Search from './Search';
import Sort from './Sort';
import { CryptoContext } from '../context/CryptoContext';

const Filter = () => {
  const { resetFunc } = useContext(CryptoContext);
  return (
    <div className='w-full h-12 border border-gray-100 relative fbc'>
      <Search />
      <Currency />
      <Sort />
      <button onClick={resetFunc}>refresh</button>
    </div>
  );
};

export default Filter;
