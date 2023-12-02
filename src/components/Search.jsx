// import React from 'react'
import { useState } from 'react'
import SearchIcon from '../assets/search-icon.svg'

const Search = () => {
    const [serahcText, setSearchText] = useState('')
   

  return (
    <div className='w-[30%] ml-[2rem]'>
      <form className='fcc relative'>
        <input type="text" className='w-full outline-none border border-gray-200 py-1 px-1 hover:border-cyan bg-[#000000] placeholder:text-white' placeholder='Search here...' />
        <button type="submit" className='absolute right-1'>
        <img src={SearchIcon} alt="searchicon" />
        </button>
      </form>
    </div>
  )
}

export default Search
