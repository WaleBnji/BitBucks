// import React from 'react'
import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import Chart from './Chart';
// import { IoMdArrowDropup } from 'react-icons/io';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const HighLowIndicator = ({ high, low, price }) => {
  const [green, setGreen] = useState();

  useEffect(() => {
    let total = high - low;

    let upTrend = Number(((high - price) * 100) / total);
    setGreen(Math.ceil(upTrend));
  }, [high, low, price]);

  return (
    <>
      <span
        className='bg-red h-1.5 rounded-l-lg w-[50%]'
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className='bg-green h-1.5 rounded-r-lg w-[50%]'
        style={{ width: `${green}` }}
      >
        &nbsp;
      </span>
    </>
  );
};

const CryptoDetails = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const { fetchCoinData, coinData, currency } = useContext(CryptoContext);

  const close = () => {
    navigate('..');
  };

  useEffect(() => {
    fetchCoinData(coinId);
  }, [coinId]);

  // console.log(coinId);

  return ReactDOM.createPortal(
    <div
      className='fixed top-0 w-full h-full bg-gray-200 bg-opacity-60 backdrop-blur-sm flex items-center justify-center'
      onClick={close}
    >
      <div
        className='w-[65%] h-[75%] px-4 py-3 bg-gray-300 bg-opacity-75 text-white  rounded-lg flex justify-between'
        onClick={(e) => e.stopPropagation()}
      >
        {coinData ? (
          <>
            <div className=' w-[45%] flex flex-col  '>
              <div className='flex w-full align-center space-x-2 '>
                <img
                  src={coinData?.image?.large}
                  alt={coinData?.name}
                  className='w-[60px]'
                />
                <h1 className='capitalize text-xl font-semibold'>
                  {coinData?.id}
                </h1>
                <span className='text-sm bg-cyan text-cyan uppercase bg-opacity-25 rounded py-0.5 px-2.5 h-[2rem] mt-3'>
                  {coinData?.symbol}
                </span>
              </div>
              <div className='mt-6 flex justify-between align-center space-x-10'>
                <h1>Price</h1>
                <div
                  className={` bg-opacity-50  flex align-center justify-between rounded w-[5rem] px-1 ${
                    coinData?.market_data?.price_change_percentage_24h > 0
                      ? 'bg-green text-green'
                      : 'bg-red text-red'
                  }`}
                >
                  <span>
                    {Number(
                      coinData?.market_data?.price_change_percentage_24h
                    ).toFixed(2)}{' '}
                    %
                  </span>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={`
                        w-[1rem] ml-0.5
                     my-auto  ${
                       coinData?.market_data?.price_change_percentage_24h > 0
                         ? 'fill-green rotate-180'
                         : 'fill-red'
                     }
                        `}
                  >
                    <path d='M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z' />
                  </svg>
                </div>
              </div>
              <h2 className='text-[1.7rem] font-semibold'>
                {new Intl.NumberFormat('en-Ng', {
                  style: 'currency',
                  currency: currency,
                }).format(
                  Number(coinData?.market_data?.current_price[currency])
                )}
              </h2>
              <div className='flex align-center justify-between my-4'>
                <div>
                  <span className='text-gray-100 text-sm'>Market Cap</span>
                  <p className='text-[1.3rem] font-semibold'>
                    {new Intl.NumberFormat('en-Ng', {
                      style: 'currency',
                      currency: currency,
                    }).format(
                      Number(coinData?.market_data?.market_cap[currency])
                    )}
                  </p>
                </div>
                <div>
                  <span className='text-gray-100 text-sm'>
                    Fully Diluted Valuation
                  </span>
                  <p className='text-[1.3rem] font-semibold'>
                    {new Intl.NumberFormat('en-Ng', {
                      style: 'currency',
                      currency: currency,
                    }).format(
                      Number(
                        coinData?.market_data?.fully_diluted_valuation[currency]
                      )
                    )}
                  </p>
                </div>
              </div>
              <div>
                <span className='text-gray-100 text-sm'>Total Volume</span>
                <p className='text-[1.3rem] font-semibold'>
                  {new Intl.NumberFormat('en-Ng', {
                    style: 'currency',
                    currency: currency,
                  }).format(
                    Number(coinData?.market_data?.total_volume[currency])
                  )}
                </p>
                <div className='flex  w-full mt-4'>
                  <HighLowIndicator
                    low={coinData?.market_data?.low_24h[currency]}
                    high={coinData?.market_data?.high_24h[currency]}
                    price={coinData?.market_data?.current_price[currency]}
                  />
                </div>
              </div>
              <div className='flex align-center justify-between my-4'>
                <div>
                  <span className='text-gray-100 text-sm'>Low 24H</span>
                  <p className='text-[1.3rem] font-semibold'>
                    {new Intl.NumberFormat('en-Ng', {
                      style: 'currency',
                      currency: currency,
                    }).format(Number(coinData?.market_data?.low_24h[currency]))}
                  </p>
                </div>
                <div>
                  <span className='text-gray-100 text-sm'>Max supply</span>
                  <p className='text-[1.3rem] font-semibold'>
                    {coinData?.market_data?.max_supply}
                  </p>
                </div>
              </div>
              <div className='flex align-center justify-between my-4'>
                <div>
                  <span className='text-gray-100 text-sm'>High 24H </span>
                  <p className='text-[1.3rem] font-semibold'>
                    {new Intl.NumberFormat('en-Ng', {
                      style: 'currency',
                      currency: currency,
                    }).format(
                      Number(coinData?.market_data?.high_24h[currency])
                    )}
                  </p>
                </div>
                <div>
                  <span className='text-gray-100 text-sm'>
                    Circulating volume
                  </span>
                  <p className='text-[1.3rem] font-semibold'>
                    {new Intl.NumberFormat('en-Ng', {
                      style: 'currency',
                      currency: currency,
                    }).format(
                      Number(coinData?.market_data?.circulating_supply)
                    )}
                  </p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex flex-col space-y-2 justify-center'>
                  <div className='bg-gray-200 bg-opacity-50 text-gray-100 text-sm  rounded px-2 py-1'>
                    <a target='blank' href={coinData?.links?.homepage[0]}>
                      {coinData?.links?.homepage[0]}
                    </a>
                  </div>
                  <div className='bg-gray-200 bg-opacity-50 text-gray-100 text-sm rounded px-2 py-1'>
                    <a
                      target='blank'
                      href={coinData?.links?.official_forum_url[0]}
                    >
                      {coinData?.links?.official_forum_url[0]}
                    </a>
                  </div>
                  <div className='bg-gray-200 bg-opacity-50 text-gray-100 text-sm rounded px-2 py-1'>
                    <a
                      target='blank'
                      href={coinData?.links?.blockchain_site[0]}
                    >
                      {coinData?.links?.blockchain_site[0]}
                    </a>
                  </div>
                </div>
                <div>
                  <p>Sentiment</p>
                  <div className='space-y-2'>
                    <div className='bg-green text-green bg-opacity-50 rounded flex align-center p-1 space-x-1 w-[5rem]'>
                      <span>{coinData?.sentiment_votes_up_percentage}</span>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='green'
                        xmlns='http://www.w3.org/2000/svg'
                        className={`
                        w-[1rem] ml-0.5
                     fill-green my-auto 
                        rotate-180 
                        `}
                      >
                        <path d='M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z' />
                      </svg>
                    </div>

                    <div className='bg-red text-red bg-opacity-50 rounded flex align-center p-1 space-x-1 w-[5rem]'>
                      <span>{coinData?.sentiment_votes_down_percentage}</span>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={`
                        w-[1rem] ml-0.5
                        fill-red my-auto  
                        `}
                      >
                        <path d='M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-cyan-300 flex flex-col w-[55%]'>
              <Chart id={coinData.id} />
            </div>
          </>
        ) : (
          <div className='w-full h-full min-h-[60vh] flex justify-center items-center'>
            <div
              className='w-8 h-8 border-cyan border-4 border-b-gray-200 animate-spin rounded-full'
              role='status'
            />
            <span className='ml-2'>Please wait</span>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('model')
  );
};

export default CryptoDetails;
