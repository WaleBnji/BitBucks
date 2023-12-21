// import Search from '../assets/search-icon.svg';
// import Enter from '../assets/submit-icon.svg';
// import Star from '../assets/star.svg';
// import Btc from '../assets/bitcoin-btc-logo.png';
// import Refresh from './assets/reset.svg';
// import { IoIosRefresh } from 'react-icons/io';
// import { useQuery } from 'react-query';
// import axios from 'axios';
// import { useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { CryptoContext } from '../context/CryptoContext';
// import { all } from 'axios';
import { useContext } from 'react';
// import { useCoins } from '../hooks/useCoins';
import Search from '../components/Filter';
import Pagination from '../components/Pagination';
const Crypto = () => {
  // const [paginate, setPaginate] = useState({
  //   orderBy: 'marketCap',
  //   timePeriod: '24h',
  //   orderDirection: 'desc',
  //   limit: '10',
  //   offset: '0',
  // });
  // const totalCoins = 1000;

  // const options = {
  //   method: 'GET',
  //   url: 'https://coinranking1.p.rapidapi.com/coins',
  //   params: {
  //     referenceCurrencyUuid: 'yhjMzLPhuIDl',
  //     'tiers[0]': '1',
  //     ...paginate,
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '9f6e343445msh3fe172cdce37101p1a0918jsnf1dc6c7b3640',
  //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  //   },
  // };

  // const { data: allcoins } = useQuery(['coinlist', paginate], async () => {
  //   return await axios(options);
  // });

  // console.log(allcoins);
  const { cryptoData, currency } = useContext(CryptoContext);
  // console.log(cryptoData, 'allcoins');

  // const { allCoins: allCoins2 } = useCoins();

  // console.log('all coins from hook', allCoins2);
  //   const offlineData = [
  //     {
  //         "id": "bitcoin",
  //         "symbol": "btc",
  //         "name": "Bitcoin",
  //         "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  //         "current_price": 39474.06,
  //         "market_cap": 772005098101,
  //         "market_cap_rank": 1,
  //         "fully_diluted_valuation": 828854151985,
  //         "total_volume": 13020436209,
  //         "high_24h": 39680,
  //         "low_24h": 38722,
  //         "price_change_24h": 700.01,
  //         "price_change_percentage_24h": 1.80535,
  //         "market_cap_change_24h": 13329942144,
  //         "market_cap_change_percentage_24h": 1.757,
  //         "circulating_supply": 19559662,
  //         "total_supply": 21000000,
  //         "max_supply": 21000000,
  //         "ath": 69045,
  //         "ath_change_percentage": -42.86545,
  //         "ath_date": "2021-11-10T14:24:11.849Z",
  //         "atl": 67.81,
  //         "atl_change_percentage": 58075.78659,
  //         "atl_date": "2013-07-06T00:00:00.000Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:17.166Z",
  //         "price_change_percentage_1h_in_currency": 0.10400024299634929,
  //         "price_change_percentage_24h_in_currency": 1.8053492315192778,
  //         "price_change_percentage_7d_in_currency": 4.489840922615886
  //     },
  //     {
  //         "id": "ethereum",
  //         "symbol": "eth",
  //         "name": "Ethereum",
  //         "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
  //         "current_price": 2166.7,
  //         "market_cap": 260486337323,
  //         "market_cap_rank": 2,
  //         "fully_diluted_valuation": 260486337323,
  //         "total_volume": 15938258909,
  //         "high_24h": 2184.56,
  //         "low_24h": 2095.92,
  //         "price_change_24h": 62.88,
  //         "price_change_percentage_24h": 2.98861,
  //         "market_cap_change_24h": 7442126289,
  //         "market_cap_change_percentage_24h": 2.94104,
  //         "circulating_supply": 120234245.268814,
  //         "total_supply": 120234245.268814,
  //         "max_supply": null,
  //         "ath": 4878.26,
  //         "ath_change_percentage": -55.65415,
  //         "ath_date": "2021-11-10T14:24:19.604Z",
  //         "atl": 0.432979,
  //         "atl_change_percentage": 499533.18531,
  //         "atl_date": "2015-10-20T00:00:00.000Z",
  //         "roi": {
  //             "times": 72.3912783818984,
  //             "currency": "btc",
  //             "percentage": 7239.12783818984
  //         },
  //         "last_updated": "2023-12-03T10:35:10.638Z",
  //         "price_change_percentage_1h_in_currency": 0.1164914790122442,
  //         "price_change_percentage_24h_in_currency": 2.9886110897664677,
  //         "price_change_percentage_7d_in_currency": 3.615765248961372
  //     },
  //     {
  //         "id": "tether",
  //         "symbol": "usdt",
  //         "name": "Tether",
  //         "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
  //         "current_price": 1,
  //         "market_cap": 89643440872,
  //         "market_cap_rank": 3,
  //         "fully_diluted_valuation": 89643440872,
  //         "total_volume": 30233870511,
  //         "high_24h": 1.004,
  //         "low_24h": 0.998416,
  //         "price_change_24h": 0.00003079,
  //         "price_change_percentage_24h": 0.00308,
  //         "market_cap_change_24h": 81863763,
  //         "market_cap_change_percentage_24h": 0.09141,
  //         "circulating_supply": 89596999295.4678,
  //         "total_supply": 89596999295.4678,
  //         "max_supply": null,
  //         "ath": 1.32,
  //         "ath_change_percentage": -24.39799,
  //         "ath_date": "2018-07-24T00:00:00.000Z",
  //         "atl": 0.572521,
  //         "atl_change_percentage": 74.71615,
  //         "atl_date": "2015-03-02T00:00:00.000Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:00.414Z",
  //         "price_change_percentage_1h_in_currency": 0.022027868024133514,
  //         "price_change_percentage_24h_in_currency": 0.0030772766924974998,
  //         "price_change_percentage_7d_in_currency": 0.028131892832418084
  //     },
  //     {
  //         "id": "binancecoin",
  //         "symbol": "bnb",
  //         "name": "BNB",
  //         "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
  //         "current_price": 228.99,
  //         "market_cap": 35231069185,
  //         "market_cap_rank": 4,
  //         "fully_diluted_valuation": 35231069185,
  //         "total_volume": 596034347,
  //         "high_24h": 231.62,
  //         "low_24h": 226.55,
  //         "price_change_24h": 1.05,
  //         "price_change_percentage_24h": 0.46063,
  //         "market_cap_change_24h": 161528827,
  //         "market_cap_change_percentage_24h": 0.4606,
  //         "circulating_supply": 153856150,
  //         "total_supply": 153856150,
  //         "max_supply": 200000000,
  //         "ath": 686.31,
  //         "ath_change_percentage": -66.65924,
  //         "ath_date": "2021-05-10T07:24:17.097Z",
  //         "atl": 0.0398177,
  //         "atl_change_percentage": 574568.64924,
  //         "atl_date": "2017-10-19T00:00:00.000Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:11.450Z",
  //         "price_change_percentage_1h_in_currency": 0.22707504073356927,
  //         "price_change_percentage_24h_in_currency": 0.4606295017776361,
  //         "price_change_percentage_7d_in_currency": -2.1847926928072585
  //     },
  //     {
  //         "id": "ripple",
  //         "symbol": "xrp",
  //         "name": "XRP",
  //         "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
  //         "current_price": 0.63,
  //         "market_cap": 33724146428,
  //         "market_cap_rank": 5,
  //         "fully_diluted_valuation": 62573867070,
  //         "total_volume": 689539963,
  //         "high_24h": 0.622401,
  //         "low_24h": 0.612599,
  //         "price_change_24h": 0.01267418,
  //         "price_change_percentage_24h": 2.06186,
  //         "market_cap_change_24h": 601230402,
  //         "market_cap_change_percentage_24h": 1.81515,
  //         "circulating_supply": 53888571585,
  //         "total_supply": 99988188647,
  //         "max_supply": 100000000000,
  //         "ath": 3.4,
  //         "ath_change_percentage": -81.73484,
  //         "ath_date": "2018-01-07T00:00:00.000Z",
  //         "atl": 0.00268621,
  //         "atl_change_percentage": 23008.13806,
  //         "atl_date": "2014-05-22T00:00:00.000Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:14.016Z",
  //         "price_change_percentage_1h_in_currency": 1.2007762081313993,
  //         "price_change_percentage_24h_in_currency": 2.06185502438951,
  //         "price_change_percentage_7d_in_currency": 1.0067511905589153
  //     },
  //     {
  //         "id": "solana",
  //         "symbol": "sol",
  //         "name": "Solana",
  //         "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
  //         "current_price": 63.43,
  //         "market_cap": 26926230997,
  //         "market_cap_rank": 6,
  //         "fully_diluted_valuation": 35789951425,
  //         "total_volume": 1498592163,
  //         "high_24h": 65.38,
  //         "low_24h": 61.6,
  //         "price_change_24h": 1.26,
  //         "price_change_percentage_24h": 2.02834,
  //         "market_cap_change_24h": 590886575,
  //         "market_cap_change_percentage_24h": 2.2437,
  //         "circulating_supply": 424333562.280851,
  //         "total_supply": 564017949.024766,
  //         "max_supply": null,
  //         "ath": 259.96,
  //         "ath_change_percentage": -75.60091,
  //         "ath_date": "2021-11-06T21:54:35.825Z",
  //         "atl": 0.500801,
  //         "atl_change_percentage": 12565.24593,
  //         "atl_date": "2020-05-11T19:35:23.449Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:16.357Z",
  //         "price_change_percentage_1h_in_currency": -0.12593600821838802,
  //         "price_change_percentage_24h_in_currency": 2.028342009185127,
  //         "price_change_percentage_7d_in_currency": 9.13902797675707
  //     },
  //     {
  //         "id": "usd-coin",
  //         "symbol": "usdc",
  //         "name": "USDC",
  //         "image": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
  //         "current_price": 1,
  //         "market_cap": 24525813505,
  //         "market_cap_rank": 7,
  //         "fully_diluted_valuation": 24524811524,
  //         "total_volume": 6983865149,
  //         "high_24h": 1.002,
  //         "low_24h": 0.996844,
  //         "price_change_24h": 0.00025787,
  //         "price_change_percentage_24h": 0.02579,
  //         "market_cap_change_24h": -26219363.554416656,
  //         "market_cap_change_percentage_24h": -0.10679,
  //         "circulating_supply": 24523646139.6167,
  //         "total_supply": 24522644247.1523,
  //         "max_supply": null,
  //         "ath": 1.17,
  //         "ath_change_percentage": -14.7619,
  //         "ath_date": "2019-05-08T00:40:28.300Z",
  //         "atl": 0.877647,
  //         "atl_change_percentage": 13.89463,
  //         "atl_date": "2023-03-11T08:02:13.981Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:12.954Z",
  //         "price_change_percentage_1h_in_currency": 0.11117747270068314,
  //         "price_change_percentage_24h_in_currency": 0.025788738340076497,
  //         "price_change_percentage_7d_in_currency": 0.0031734626122091277
  //     },
  //     {
  //         "id": "staked-ether",
  //         "symbol": "steth",
  //         "name": "Lido Staked Ether",
  //         "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
  //         "current_price": 2163.07,
  //         "market_cap": 20083313110,
  //         "market_cap_rank": 8,
  //         "fully_diluted_valuation": 20083313110,
  //         "total_volume": 11817664,
  //         "high_24h": 2183.21,
  //         "low_24h": 2096.62,
  //         "price_change_24h": 60.08,
  //         "price_change_percentage_24h": 2.85704,
  //         "market_cap_change_24h": 546286066,
  //         "market_cap_change_percentage_24h": 2.79616,
  //         "circulating_supply": 9286516.44460881,
  //         "total_supply": 9286516.44460881,
  //         "max_supply": 9286516.44460881,
  //         "ath": 4829.57,
  //         "ath_change_percentage": -55.24929,
  //         "ath_date": "2021-11-10T14:40:47.256Z",
  //         "atl": 482.9,
  //         "atl_change_percentage": 347.56344,
  //         "atl_date": "2020-12-22T04:08:21.854Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:09.495Z",
  //         "price_change_percentage_1h_in_currency": 0.0389587796321298,
  //         "price_change_percentage_24h_in_currency": 2.857044759479652,
  //         "price_change_percentage_7d_in_currency": 3.5524629307538538
  //     },
  //     {
  //         "id": "cardano",
  //         "symbol": "ada",
  //         "name": "Cardano",
  //         "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
  //         "current_price": 0.39,
  //         "market_cap": 13826044351,
  //         "market_cap_rank": 9,
  //         "fully_diluted_valuation": 17779278722,
  //         "total_volume": 276048599,
  //         "high_24h": 0.402109,
  //         "low_24h": 0.386305,
  //         "price_change_24h": 0.00525504,
  //         "price_change_percentage_24h": 1.34908,
  //         "market_cap_change_24h": 171350827,
  //         "market_cap_change_percentage_24h": 1.25489,
  //         "circulating_supply": 34994220267.1944,
  //         "total_supply": 45000000000,
  //         "max_supply": 45000000000,
  //         "ath": 3.09,
  //         "ath_change_percentage": -87.20589,
  //         "ath_date": "2021-09-02T06:00:10.474Z",
  //         "atl": 0.01925275,
  //         "atl_change_percentage": 1951.35847,
  //         "atl_date": "2020-03-13T02:22:55.044Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:18.325Z",
  //         "price_change_percentage_1h_in_currency": -0.15299622163032864,
  //         "price_change_percentage_24h_in_currency": 1.3490836154067176,
  //         "price_change_percentage_7d_in_currency": 0.36805670350860187
  //     },
  //     {
  //         "id": "dogecoin",
  //         "symbol": "doge",
  //         "name": "Dogecoin",
  //         "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
  //         "current_price": 0.09,
  //         "market_cap": 12083242687,
  //         "market_cap_rank": 10,
  //         "fully_diluted_valuation": 12083246089,
  //         "total_volume": 696723040,
  //         "high_24h": 0.087177,
  //         "low_24h": 0.083455,
  //         "price_change_24h": 0.00105523,
  //         "price_change_percentage_24h": 1.25675,
  //         "market_cap_change_24h": 147646381,
  //         "market_cap_change_percentage_24h": 1.23703,
  //         "circulating_supply": 142080816383.705,
  //         "total_supply": 142080856383.705,
  //         "max_supply": null,
  //         "ath": 0.731578,
  //         "ath_change_percentage": -88.39716,
  //         "ath_date": "2021-05-08T05:08:23.458Z",
  //         "atl": 0.0000869,
  //         "atl_change_percentage": 97575.69663,
  //         "atl_date": "2015-05-06T00:00:00.000Z",
  //         "roi": null,
  //         "last_updated": "2023-12-03T10:35:13.493Z",
  //         "price_change_percentage_1h_in_currency": -0.0660958663260623,
  //         "price_change_percentage_24h_in_currency": 1.2567489312912068,
  //         "price_change_percentage_7d_in_currency": 8.984460175169975
  //     }
  // ]
  return (
    <div>
      <Search />
      {cryptoData ? (
        <table className='w-full mt-6 table-auto border max-w-[1250px] mx-auto'>
          <thead className=''>
            <tr className='border border-b font-semibold text-gray-100'>
              <th>Asset</th>
              <th>Name</th>
              <th>Price</th>
              <th>Total volume</th>
              <th>Marekt Cap Change</th>
              <th>1H</th>
              <th>2H</th>
              <th>7D</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData &&
              cryptoData.map((coin) => {
                return (
                  <tr className='border-b text-center ' key={coin.id}>
                    <td className='fc space-x-2 py-1 px-2'>
                      <button
                        className='outline-0 border-0 cursor-pointer'
                        onClick={() => {}}
                      >
                        <svg
                          className='fill-gray-100 hover:fill-cyan'
                          width='30'
                          height='30'
                          viewBox='0 0 30 30'
                          fill='cyan'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_16_420)'>
                            <path d='M22.6583 28.3333C22.2901 28.333 21.9303 28.2227 21.625 28.0167L15.4083 23.85C15.3777 23.8289 15.3414 23.8175 15.3042 23.8175C15.267 23.8175 15.2306 23.8289 15.2 23.85L8.98334 28.0167C8.67117 28.2251 8.30297 28.3337 7.92765 28.3279C7.55233 28.3221 7.18764 28.2023 6.88201 27.9844C6.57637 27.7665 6.34426 27.4608 6.2165 27.1078C6.08873 26.7549 6.07135 26.3714 6.16667 26.0083L8.20834 18.8083C8.21799 18.7721 8.21682 18.7339 8.20497 18.6983C8.19312 18.6628 8.17112 18.6315 8.14167 18.6083L2.25834 13.9833C1.94862 13.7526 1.71888 13.4307 1.60133 13.0628C1.48377 12.6949 1.48431 12.2995 1.60285 11.9319C1.72139 11.5644 1.952 11.2431 2.26233 11.0132C2.57267 10.7833 2.94718 10.6563 3.33334 10.65L10.8333 10.3667C10.8702 10.3641 10.9056 10.351 10.9351 10.3288C10.9647 10.3066 10.9872 10.2764 11 10.2417L13.5833 3.21666C13.7136 2.86053 13.9501 2.55301 14.2608 2.33574C14.5716 2.11848 14.9416 2.00195 15.3208 2.00195C15.7 2.00195 16.0701 2.11848 16.3808 2.33574C16.6916 2.55301 16.9281 2.86053 17.0583 3.21666L19.6417 10.2417C19.6544 10.2764 19.677 10.3066 19.7065 10.3288C19.7361 10.351 19.7715 10.3641 19.8083 10.3667L27.3083 10.65C27.6945 10.6563 28.069 10.7833 28.3793 11.0132C28.6897 11.2431 28.9203 11.5644 29.0388 11.9319C29.1574 12.2995 29.1579 12.6949 29.0403 13.0628C28.9228 13.4307 28.6931 13.7526 28.3833 13.9833L22.5 18.6083C22.4697 18.6308 22.447 18.662 22.435 18.6978C22.4231 18.7336 22.4225 18.7722 22.4333 18.8083L24.475 26.0083C24.5467 26.2845 24.5538 26.5735 24.4958 26.8528C24.4378 27.1322 24.3162 27.3944 24.1406 27.6193C23.9649 27.8441 23.7398 28.0254 23.4828 28.1493C23.2257 28.2731 22.9436 28.3361 22.6583 28.3333ZM15.3083 22.15C15.6774 22.1613 16.0345 22.2832 16.3333 22.5L22.55 26.6667C22.5815 26.6906 22.6199 26.7037 22.6595 26.704C22.6991 26.7043 22.7377 26.6918 22.7695 26.6684C22.8014 26.645 22.8249 26.6118 22.8364 26.574C22.8479 26.5361 22.8468 26.4955 22.8333 26.4583L20.7917 19.2583C20.6912 18.9051 20.6986 18.53 20.813 18.181C20.9273 17.8321 21.1433 17.5253 21.4333 17.3L27.3167 12.675C27.3488 12.6525 27.3728 12.6202 27.3852 12.583C27.3976 12.5458 27.3978 12.5056 27.3857 12.4683C27.3735 12.431 27.3498 12.3986 27.3179 12.3758C27.2859 12.353 27.2476 12.341 27.2083 12.3417L19.7083 12.0583C19.3411 12.044 18.9865 11.9206 18.6896 11.704C18.3928 11.4873 18.1672 11.1871 18.0417 10.8417L15.4583 3.81666C15.4467 3.77936 15.4234 3.74676 15.392 3.72361C15.3605 3.70046 15.3224 3.68797 15.2833 3.68797C15.2443 3.68797 15.2062 3.70046 15.1747 3.72361C15.1432 3.74676 15.12 3.77936 15.1083 3.81666L12.55 10.8333C12.4245 11.1787 12.1989 11.4789 11.9021 11.6956C11.6052 11.9123 11.2506 12.0357 10.8833 12.05L3.38334 12.3333C3.34412 12.3327 3.30574 12.3447 3.27383 12.3674C3.24191 12.3902 3.21815 12.4227 3.20602 12.46C3.1939 12.4973 3.19406 12.5375 3.20648 12.5747C3.21889 12.6119 3.24291 12.6441 3.27501 12.6667L9.16667 17.3C9.45579 17.526 9.67117 17.8328 9.78543 18.1815C9.89969 18.5303 9.90767 18.9051 9.80834 19.2583L7.77501 26.4583C7.76287 26.4944 7.76281 26.5334 7.77484 26.5695C7.78687 26.6056 7.81033 26.6368 7.84167 26.6583C7.87186 26.6842 7.91028 26.6983 7.95001 26.6983C7.98973 26.6983 8.02815 26.6842 8.05834 26.6583L14.275 22.4917C14.5788 22.2901 14.9354 22.1829 15.3 22.1833L15.3083 22.15Z' />
                          </g>
                          <defs>
                            <clipPath id='clip0_16_420'>
                              <rect width='30' height='30' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <img
                        src={coin?.image}
                        alt={coin.name}
                        height={25}
                        width={25}
                      />
                      <h3 className='capitalize'>{coin?.symbol}</h3>
                    </td>
                    <td className='py-1 text-white font-semibold'>
                      {coin?.name}
                    </td>
                    <td className='py-1 font-semibold text-left'>
                      {new Intl.NumberFormat('en-Ng', {
                        style: 'currency',
                        currency: currency,
                      }).format(Number(coin?.current_price))}
                    </td>
                    <td className='py-1 font-semibold'>{coin?.total_volume}</td>
                    <td
                      className={
                        coin?.market_cap_change_percentage_24h > 0
                          ? 'text-green py-1 font-semibold'
                          : 'py-1 font-semibold text-red'
                      }
                    >
                      {coin?.market_cap_change_percentage_24h}%
                    </td>
                    <td
                      className={
                        coin?.price_change_percentage_1h_in_currency
                          ? 'font-semibold text-green py-1'
                          : 'text-red py-1 font-semibold'
                      }
                    >
                      {coin?.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </td>
                    <td
                      className={
                        coin?.price_change_percentage_24h_in_currency > 0
                          ? 'text-green py-1 font-semibold'
                          : 'text-red py-1 font-semibold'
                      }
                    >
                      {coin?.price_change_percentage_24h_in_currency.toFixed(2)}
                      %
                    </td>
                    <td
                      className={
                        coin?.price_change_percentage_7d_in_currency > 0
                          ? 'text-green py-1 font-semibold'
                          : 'text-red py-1 font-semibold'
                      }
                    >
                      {coin?.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : null}
      <div className='flex items-center justify-between mt-6 h-3'>
        <span>
          Data provided by{' '}
          <a href='http://www.coingecko.com' className='text-cyan'>
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>

      {/* <div className='fcc text-center space-x-2'>
        <h3>per page:</h3>
        <input type='text' className='w-[30px] bg-[#323232]' placeholder='10' />
        <img src={Enter} alt='' />
      </div> */}
      {/* <ReactPaginate
        pageCount={totalCoins / paginate.limit}
        nextLabel='next >'
        containerClassName='flex space-x-4 my-4'
        previousLabel='< previous'
        onPageChange={(page) => {
          setPaginate({
            ...paginate,
            offset: String(Number(page + 1) * Number(paginate.limit)),
          });
        }}
      /> */}
    </div>
  );
};

export default Crypto;
