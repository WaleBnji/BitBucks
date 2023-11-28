import axios from 'axios';
import { useQuery } from 'react-query';

export const useCoins = () => {
  const { data: allCoins, isLoading: allCoinsLoading } = useQuery(
    'all-coins-key',
    async () => {
      return axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
    }
  );

  return {
    allCoins,
    allCoinsLoading,
  };
};
