// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { useEffect, useState } from 'react';

import { LineChart, Line } from 'recharts';

const ChartComponent = ({ data }) => {
  <LineChart width={400} height={400} data={data}>
    <Line type='monotone' dataKey='prices' stroke='#8884d8' />
  </LineChart>;
};

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState();
  const getChartData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily&precision=6`
      )
        .then((res) => res.json())
        .then((json) => json);
      //   setChartData(data);
      const convertedData = data.prices.map((item) => {
        return {
          date: new Date(item[0]).toLocaleDateString(),
          prices: item[1],
        };
      });
      setChartData(convertedData);
      console.log('chartData', chartData);
      console.log('convertedData', convertedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChartData(id);
  }, [id]);
  return (
    <div className='h-[90%]'>
      <ChartComponent data={chartData} />
    </div>
  );
};

export default Chart;
