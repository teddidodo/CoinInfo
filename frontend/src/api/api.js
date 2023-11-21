import axios from 'axios';

let API =  axios.create({
  baseURL: 'https://fiat-to-crypto-teddidodo.vercel.app',
  headers: {
    'Accept': 'application/json',
    "Content-Type": 'application/json'
  }
});

export async function getPriceETH() {
    const ethPromise = await API.get('/eth-price')
    const response = ethPromise.data
    return response
}

export async function getExchangeRateForChart() {
  const chartPromise = await API.get('/chart/exchange_rate')
  const response = chartPromise.data
  return response.rate
}

export async function getExchangeRate() {
  const ethPromise = await API.get('/exchange_rate/eth')
  const response = ethPromise.data
  return response
}