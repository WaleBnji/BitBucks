// import React from 'react'
import { useState } from 'react';
import SearchIcon from '../assets/search-icon.svg';
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import { debounce } from 'lodash';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling


const SearchInput = ({handleSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchText(query);
    if(searchText.length > 0){
      handleSearch(query);

    }
  };

  return (
    <>
    <form className='fcc relative'>
        <input
          type='text'
          onChange={handleSubmit}
          value={searchText}
          className='w-full outline-none border border-gray-200 py-1 px-1 hover:border-cyan bg-[#000000] placeholder:text-white'
          placeholder='Search here...'
        />
        <button type='submit' className='absolute right-1'>
          <img src={SearchIcon} alt='searchicon' />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className='h-96 w-96 rounded absolute top-[3rem] bg-gray-200 bg-opacity-60 backdrop-blur-md px-2 py-3'>
          <li>bitcoin</li>
          <li>bitcoin</li>
        </ul>
      ) : null}
    </>
  )
}

const Search = () => {
  let { searchData, fetchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    fetchResult(val);
  }, 2000);

  

  console.log(searchData, 'searchCoins');

  return (
    <div className='w-[30%] ml-[2rem]'>
      <SearchInput handleSearch={debounceFunc}/>
    </div>
  );
};

export default Search;
