import axios from 'axios';
import { createContext } from 'react';
// import { useQuery } from 'react-query';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

//create context object
export const CryptoContext = createContext();

//create provider component
export const CryptoProvider = ({ children }) => {
  const fetchData = async () => {
    return await axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const { data: allCoins } = fetchData();
  console.log(allCoins);

  return (
    <CryptoContext.Provider value={{ allCoins }}>
      {children}
    </CryptoContext.Provider>
  );
};
