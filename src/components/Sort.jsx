// import React from 'react'
// import Refresh from '../assets/reset.svg'
// import { BiReset } from "react-icons/bi";
import { useContext } from 'react';
import DropDown from '../assets/select-icon.svg';
import { CryptoContext } from '../context/CryptoContext';
const Sort = () => {
  const { setSortBy } = useContext(CryptoContext);

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };
  return (
    <div className=''>
      <label htmlFor='sortby' className='fcc pr-4'>
        <h3>sort by:</h3>
        <select
          name='sortby'
          id='sortby'
          className='bg-[#000] p-[0.5rem] focus:outline-none relative cursor-pointer'
          onClick={handleSort}
        >
          <option value='market_cap_desc'>Market Cap Desc</option>
          <option value='market_cap_asc'>Market Cap Asc</option>
          <option value='volume_desc'>Volume Desc</option>
          <option value='volume_asc'>Volume Inc</option>
          <option value='id_desc'>Id Desc</option>
          <option value='idasc'>Id Asc</option>
          <option value='gecko_desc'>Gecko Desc</option>
          <option value='gecko_asc'>Gecko Asc</option>
        </select>
        {/* <BiReset className="w-[25px] h-[25px] text-cyan"/> */}
        <img
          src={DropDown}
          alt=''
          className='absolute right-[1.1rem] pointer-events-none'
        />
      </label>
    </div>
  );
};

export default Sort;
