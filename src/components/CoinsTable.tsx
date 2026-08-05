import { useNavigate } from 'react-router-dom';
import { type Coin } from '../types/coin';

type CoinsTableProps = {
  coins: Coin[];
  isFavorite: (coinId: string) => boolean;
  toggleFavorite: (coinId: string) => void;
};

export default function CoinsTable({
  coins,
  isFavorite,
  toggleFavorite,
}: CoinsTableProps) {
  const navigate = useNavigate();

  return (
    <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden'>
      <div className='overflow-x-auto px-6 py-2'>
        <table className='w-full text-sm text-white'>
          <thead className='text-gray-400 border-b border-white/10'>
            <tr className='border-b border-white/10'>
              <th className='text-center py-2 w-12'>★</th>
              <th className='text-left py-2'>#</th>
              <th className='text-left py-2'>Name</th>
              <th className='text-right py-2'>Price</th>
              <th className='text-right py-2'>24h %</th>
              <th className='text-right py-2'>Market Cap</th>
            </tr>
          </thead>

          <tbody>
            {coins.length > 0 ? (
              coins.map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => navigate(`/coin/${coin.id}`)}
                  className='border-b border-white/5 hover:bg-white/5 transition-all duration-300 cursor-pointer'
                >
                  <td className='text-center'>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(coin.id);
                      }}
                      className={`text-xl cursor-pointer transition-colors duration-200 ${
                        isFavorite(coin.id)
                          ? 'text-yellow-400'
                          : 'text-gray-500 hover:text-yellow-400'
                      }`}
                    >
                      {isFavorite(coin.id) ? '★' : '☆'}
                    </button>
                  </td>
                  <td className='py-4'>
                    <span className='bg-white/10 px-3 py-1 rounded-full text-sm'>
                      #{coin.market_cap_rank}
                    </span>
                  </td>

                  <td className='py-3 flex items-center gap-2'>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className='w-8 h-8 rounded-full'
                    />

                    {coin.name}

                    <span className='text-gray-400 uppercase'>
                      {coin.symbol}
                    </span>
                  </td>

                  <td className='text-right'>
                    ${(coin.current_price ?? 0).toLocaleString()}
                  </td>

                  <td
                    className={`text-right ${
                      (coin.price_change_percentage_24h ?? 0) >= 0
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                  </td>

                  <td className='text-right'>
                    ${((coin.market_cap ?? 0) / 1e9).toFixed(2)}B
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className='text-center py-10 text-gray-400'>
                  No coins found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
