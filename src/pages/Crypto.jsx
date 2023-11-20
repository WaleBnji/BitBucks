import Search from '../assets/search-icon.svg';
import Enter from '../assets/submit-icon.svg';
import Star from '../assets/star.svg';
import Btc from '../assets/bitcoin-btc-logo.png';
// import Refresh from './assets/reset.svg';
import { IoIosRefresh } from 'react-icons/io';
import { useQuery } from 'react-query';
import axios from 'axios';

const Crypto = () => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Key': '9f6e343445msh3fe172cdce37101p1a0918jsnf1dc6c7b3640',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  const { data: allcoins } = useQuery('coinlist', async () => {
    return await axios(options);
  });

  console.log(allcoins);

  return (
    <div>
      <div className='fbc bg-[#323232] p-2'>
        <input
          type='search'
          className='outline-none w-full bg-[#323232]'
          placeholder='search here...'
        />
        <img src={Search} alt='' />
      </div>

      <div className='fbc'>
        <div className='fbc space-x-2'>
          <h2>currency:</h2>
          <input type='text' className='bg-[#323232] w-[50px]' />
          <img src={Enter} alt='' />
        </div>
        <IoIosRefresh className='text-[#14ffec]' size={30} />
      </div>
      <div className='fbc'>
        <h2>sort by:</h2>
        <div className='w-[80%] px-4'>
          <select name='sortby' id='sortby' className='text-black'>
            <option value='marketcapdesc'>Market Cap Desc</option>
            <option value='marketcapasc'>Market Cap Asc</option>
            <option value='volumedesc'>Volume Desc</option>
            <option value='volumeasc'>Volume Asc</option>
            <option value='iddesc'>Id Desc</option>
            <option value='idasc'>Id Asc</option>
            <option value='geckodesc'>Gecko Desc</option>
            <option value='geckoasc'>Gecko Asc</option>
          </select>
        </div>
      </div>
      <table className='w-full'>
        <tr className='border'>
          <th>Asset</th>
          <th>Price</th>
        </tr>
        {allcoins &&
          allcoins?.data?.data?.coins.map((coin, index) => {
            return (
              <tr key={index} className='border text-center '>
                <td className='py-2'>
                  <div className='fc space-x-2'>
                    <img src={Star} alt='' />
                    <img
                      src={coin?.iconUrl}
                      alt=''
                      className='w-[40px] h-[40px] object-cover'
                    />
                    <h2>{coin?.symbol}</h2>
                  </div>
                </td>
                <td className='py-2 text-left'>
                  ${Number(coin?.price)?.toFixed(2)}
                </td>
              </tr>
            );
          })}
      </table>
      <div className='fcc text-center space-x-2'>
        <h3>per page:</h3>
        <input type='text' className='w-[30px] bg-[#323232]' placeholder='10' />
        <img src={Enter} alt='' />
      </div>
    </div>
  );
};

export default Crypto;
