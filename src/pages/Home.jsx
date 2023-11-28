import Logo from '../assets/logo.svg';
import { Outlet, NavLink } from 'react-router-dom';
import { CryptoProvider } from '../context/CryptoContext';
const Home = () => {
  return (
    
   <CryptoProvider>
      <div className='space-y-4 '>
        <div className='flex justify-start items-center'>
          <NavLink to='/'>
            <img src={Logo} alt='' />
            <h1 className='text-white'>BitBucks</h1>
          </NavLink>
        </div>
        <div>
          <nav
            className='w-[80%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg mx-auto
    '
          >
            <NavLink
              to='/'
              end
              className={({ isActive }) => {
                return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? 'bg-cyan text-gray-300'
    : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
              }}
            >
              Crypto
            </NavLink>

            <NavLink
              to='/trending'
              className={({ isActive }) => {
                return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? 'bg-cyan text-gray-300'
    : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
              }}
            >
              trending
            </NavLink>

            <NavLink
              to='/saved'
              className={({ isActive }) => {
                return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? 'bg-cyan text-gray-300'
    : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
              }}
            >
              saved
            </NavLink>
          </nav>

          {/* <ul className='flex items-center justify-around flex-wrap border border-[#14ffec] rounded p-[2px]'>
            <li className='bg-[#14ffec] text-black  outline-none px-6 py-1 w-auto '>
              Crypto
            </li>
            <li className='bg-[#323232]  outline-none px-6 py-1 w-auto '>
              Trending
            </li>
            <li className='bg-[#323232]  outline-none px-6 py-1 w-auto '>
              Saved
            </li>
            <li className='bg-[#323232]  outline-none px-6 py-1 w-auto '>
              News
            </li>
          </ul> */}
        </div>
        <Outlet />
      </div>

   </CryptoProvider>
  );
};

export default Home;
