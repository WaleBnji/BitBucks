import Logo from '../assets/logo.svg';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className='space-y-4 wrapper'>
      <div className='flex justify-start items-center'>
        <img src={Logo} alt='' />
        <h1 className='text-white'>BitBucks</h1>
      </div>
      <div>
        <ul className='fbc border border-[#14ffec] rounded p-[2px]'>
          <li className='bg-[#14ffec] text-black  outline-none px-6 py-1 w-auto '>
            Crypto
          </li>
          <li className='bg-[#323232]  outline-none px-6 py-1 w-auto '>
            Trending
          </li>
          <li className='bg-[#323232]  outline-none px-6 py-1 w-auto '>
            Saved
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
