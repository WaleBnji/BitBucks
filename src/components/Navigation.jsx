// import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      className='w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg flex-wrap
    '
    >
      <NavLink
        to='/'
        end
        className={({ isactive }) => {
          return `w-full text-base text-center
            ${
              isactive
                ? 'bg-cyan text-gray-300'
                : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
            }
        border-0 cursor-pointer rounded capitalize font-semibold  
            `;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to='/trending'
        className={({ isactive }) => {
          return `w-full text-base text-center
            ${
              isactive
                ? 'bg-cyan text-gray-300'
                : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
            }
        border-0 cursor-pointer rounded capitalize font-semibold  
            `;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to='/saved'
        className={({ isactive }) => {
          return `w-full text-base text-center
            ${
              isactive
                ? 'bg-cyan text-gray-300'
                : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
            }
        border-0 cursor-pointer rounded capitalize font-semibold  
            `;
        }}
      >
        Saved
      </NavLink>
      <NavLink
        to='/news'
        className={({ isactive }) => {
          return `w-full text-base text-center
            ${
              isactive
                ? 'bg-cyan text-gray-300'
                : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
            }
        border-0 cursor-pointer rounded capitalize font-semibold  
            `;
        }}
      >
        News
      </NavLink>
    </nav>
  );
};

export default Navigation;
