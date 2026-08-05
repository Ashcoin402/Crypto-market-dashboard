import { useEffect, useState } from 'react';

export default function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (coinId: string) => {
    return favorites.includes(coinId);
  };

  const toggleFavorite = (coinId: string) => {
    setFavorites((prev) =>
      prev.includes(coinId)
        ? prev.filter((id) => id !== coinId)
        : [...prev, coinId],
    );
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
