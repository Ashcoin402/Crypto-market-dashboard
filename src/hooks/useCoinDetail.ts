import { useEffect, useState } from 'react';
import { getCoinDetail, getCoinChart } from '../api/coingecko';
import type { CoinDetail, ChartData } from '../types/coin';

export function useCoinDetail(id: string) {
  const [coin, setCoin] = useState<CoinDetail | null>(null);
  const [chart, setChart] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoinData = async (showLoading = true) => {
    try {
      if (showLoading) {
        setLoading(true);
      }

      setError(null);

      const [coinData, chartData] = await Promise.all([
        getCoinDetail(id),
        getCoinChart(id),
      ]);

      setCoin(coinData);
      setChart(chartData);
    } catch {
      setError('Failed to load data');
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    Promise.all([getCoinDetail(id), getCoinChart(id)])
      .then(([coinData, chartData]) => {
        setCoin(coinData);
        setChart(chartData);
      })
      .catch(() => setError('Failed to load data'))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    coin,
    chart,
    loading,
    error,
    refetch: () => fetchCoinData(true),
  };
}
