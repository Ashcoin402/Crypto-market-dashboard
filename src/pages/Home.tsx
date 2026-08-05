import { useCoins } from '../hooks/useCoins';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import useFavorites from '../hooks/useFavorites';
import SearchBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';
import StatsCards from '../components/StatsCards';
import CoinsTable from '../components/CoinsTable';
import DashboardHero from '../components/DashboardHero';
import FilterTabs from '../components/FilterTabs';
import HomeSkeleton from '../components/HomeSkeleton';
import ErrorState from '../components/ErrorState';
export default function Home() {
  const { coins, loading, loadingMore, error, loadMore, refetch } = useCoins();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('market_cap');
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const topGainer = [...coins].sort(
    (a, b) =>
      (b.price_change_percentage_24h ?? 0) -
      (a.price_change_percentage_24h ?? 0),
  )[0];

  const topLoser = [...coins].sort(
    (a, b) =>
      (a.price_change_percentage_24h ?? 0) -
      (b.price_change_percentage_24h ?? 0),
  )[0];

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()),
  );
  const sortedCoins = [...filteredCoins].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return (b.current_price ?? 0) - (a.current_price ?? 0);

      case 'change':
        return (
          (b.price_change_percentage_24h ?? 0) -
          (a.price_change_percentage_24h ?? 0)
        );

      case 'market_cap':
      default:
        return (b.market_cap ?? 0) - (a.market_cap ?? 0);
    }
  });
  const displayedCoins =
    activeTab === 'favorites'
      ? sortedCoins.filter((coin) => favorites.includes(coin.id))
      : sortedCoins;

  useEffect(() => {
    if (activeTab !== 'all') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 1,
      },
    );

    const currentRef = loadMoreRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [activeTab, loadMore]);

  if (loading) return <HomeSkeleton />;

  if (error) return <ErrorState message={error} onRetry={refetch} />;

  return (
    <div className='max-w-6xl mx-auto px-8 py-8'>
      <DashboardHero />

      <StatsCards
        totalCoins={coins.length}
        topGainer={topGainer}
        topLoser={topLoser}
      />

      <SearchBar value={search} onChange={setSearch} />
      <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <SortButtons sortBy={sortBy} onSortChange={setSortBy} />

      <CoinsTable
        coins={displayedCoins}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />

      {activeTab === 'all' && (
        <div
          ref={loadMoreRef}
          className='h-20 flex justify-center items-center'
        >
          {loadingMore && (
            <p className='text-gray-400 animate-pulse'>Loading more coins...</p>
          )}
        </div>
      )}
    </div>
  );
}
