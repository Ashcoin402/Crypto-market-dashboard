import { useEffect, useState } from 'react';
import { getCoins } from '../api/coingecko';
import type { Coin } from '../types/coin';

export function useCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCoins(1)
      .then(setCoins)
      .catch(() => setError('Failed to fetch coins'))
      .finally(() => setLoading(false));
  }, []);

  const loadMore = async () => {
    if (loading || loadingMore) return;

    try {
      setLoadingMore(true);

      const nextPage = page + 1;
      const newCoins = await getCoins(nextPage);

      setCoins((prev) => [...prev, ...newCoins]);
      setPage(nextPage);
    } catch {
      console.error('Failed to load more coins');
    } finally {
      setLoadingMore(false);
    }
  };

  const refetch = () => {
    setLoading(true);
    setError(null);

    getCoins(1)
      .then((data) => {
        setCoins(data);
        setPage(1);
      })
      .catch(() => setError('Failed to fetch coins'))
      .finally(() => setLoading(false));
  };

  return {
    coins,
    loading,
    loadingMore,
    error,
    loadMore,
    refetch,
  };
}
