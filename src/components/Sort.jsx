// import React from 'react'
// import Refresh from '../assets/reset.svg'
import { BiReset } from "react-icons/bi";
const Sort = () => {
  return (
    <div className="">
      <label htmlFor="sortby">
     <h3>sort by:</h3>
     <select name="sortby" id="sortby" className="bg-[#000] p-[0.5rem]">
        <option value="marcapdesc">Market Cap Desc</option>
        <option value="marcapasc">Market Cap Asc</option>
        <option value="volumedesc">Volume Desc</option>
        <option value="volumeinc">Volume Inc</option>
        <option value="iddesc">Id Desc</option>
        <option value="idasc">Id Asc</option>
        <option value="geckodesc">Gecko Desc</option>
        <option value="geckoasc">Gecko Asc</option>
     </select>

      </label>
     <BiReset className="w-[25px] h-[25px] text-cyan"/>
    </div>
  )
}

export default Sort
