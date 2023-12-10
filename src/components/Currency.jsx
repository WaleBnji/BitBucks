// import React from 'react'
import { useContext, useRef } from 'react'
import Enter from '../assets/submit-icon.svg'
import { CryptoContext } from '../context/CryptoContext'

const Currency = () => {

  const {setCurrency} = useContext(CryptoContext)
  const currencyRef = useRef(null)

  const handleCurrencySubmit = (e) => {
e.preventDefault();
console.log('clicked')
let val = currencyRef.current.value;
setCurrency(val)
currencyRef.current.value = '';
  }
  return (
    <div className='fcc space-x-[5px] ml-[-3rem]'>
      {/* <h3>currency:</h3> */}
      <form className='fcc' onSubmit={handleCurrencySubmit}>
        <label htmlFor="currency" className='mr-1'>Currency:</label>
        <input type="text" ref={currencyRef} name='currency' className='w-[3rem] rounded bg-[#000] border border-gray-100 placeholder:px-1 hover:outline-cyan' placeholder='usd'/>
        <button type="submit">
        <img src={Enter} alt="" className='cursor-pointer' />

        </button>

      </form>
    </div>
  )
}

export default Currency
