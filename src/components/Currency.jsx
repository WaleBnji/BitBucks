// import React from 'react'
import Enter from '../assets/submit-icon.svg'

const Currency = () => {
  return (
    <div className='fcc space-x-[5px] ml-[-3rem]'>
      <h3>currency:</h3>
      <form className='fcc'>
        <input type="text"  className='w-[3rem] rounded bg-[#000] border border-gray-100'/>
        <img src={Enter} alt="" />

      </form>
    </div>
  )
}

export default Currency
