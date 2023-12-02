// import React from 'react'

import Currency from "./Currency";
import Search from "./Search";
import Sort from "./Sort";

const Filter = () => {
  return (
    <div className='w-full h-12 border border-gray-100 relative fbc'>
        <Search />
        <Currency />
        <Sort />
    </div>
  );
};

export default Filter;
