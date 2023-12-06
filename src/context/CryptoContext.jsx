import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

//create context object
export const CryptoContext = createContext();

//create provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState()
  const [coinSearch, setCoinSearch] = useState('');
  const fetchData = async () => {
    return await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2`
      )
      .then((res) => {
        // console.log(res.data);
        setCryptoData(res.data);
      });
  };

  // const fetchSearch = async(query) => {
  //   return await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`).then((res) => {
  //   console.log(res.coins)  
  //   setSearchData(res.coins)
  //   })
  // }

  const fetchResult = async (query) => {
try{
const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then((res) => res.json()).then((json) => json)
setSearchData(data.coins)
} catch (error) {
console.log(error)
}
  }

 
  useEffect(() => {
    fetchData();
  }, [coinSearch]);

  return (
    <CryptoContext.Provider value={{ searchData, fetchResult, cryptoData, setCoinSearch }}>
      {children}
    </CryptoContext.Provider>
  );
};
