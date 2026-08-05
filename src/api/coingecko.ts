import axios from 'axios';
import type { Coin, CoinDetail, ChartData } from '../types/coin';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCoins = (page = 1): Promise<Coin[]> =>
  api
    .get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50,
        page,
        sparkline: false,
      },
    })
    .then((r) => r.data);

export const getCoinDetail = (id: string): Promise<CoinDetail> =>
  api.get(`/coins/${id}`).then((r) => r.data);

export async function getCoinChart(id: string): Promise<ChartData[]> {
  const { data } = await api.get(`/coins/${id}/market_chart`, {
    params: { vs_currency: 'usd', days: 7 },
  });
  return data.prices.map(([timestamp, price]: [number, number]) => ({
    date: new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    price: Math.round(price * 100) / 100,
  }));
}
