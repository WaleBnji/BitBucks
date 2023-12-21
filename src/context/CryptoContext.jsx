import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

//create context object
export const CryptoContext = createContext();

//create provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [sortBy, setSortBy] = useState('market_cap_desc');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  // const [totalPages, setTotalPages] = useState(250);

  const fetchData = async () => {
    // return await axios
    //   .get(
    //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2`
    //   )
    //   .then((res) => {
    //     // console.log(res.data);
    //     setCryptoData(res.data);
    //   });
    try {
      const data = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2`
        )
        .then((res) => res.data);
      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const data = await axios
    //     .get(`https://api.coingecko.com/api/v3/coins/list`)
    //     .then((res) => console.log(res.length));
    //   console.log(typeof data.length);

    //   setTotalPages(Number(data.length));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // const fetchSearch = async(query) => {
  //   return await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`).then((res) => {
  //   console.log(res.coins)
  //   setSearchData(res.coins)
  //   })
  // }

  const fetchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFunc = () => {
    setCoinSearch('');
    setPage(1);
    setPerPage(10);
  };
  useEffect(() => {
    fetchData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        searchData,
        fetchResult,
        cryptoData,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        resetFunc,
        setPerPage,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
