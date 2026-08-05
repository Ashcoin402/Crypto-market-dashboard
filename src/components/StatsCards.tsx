type StatsCardsProps = {
  totalCoins: number;
  topGainer?: {
    symbol: string;
    price_change_percentage_24h?: number | null;
  };
  topLoser?: {
    symbol: string;
    price_change_percentage_24h?: number | null;
  };
};

export default function StatsCards({
  totalCoins,
  topGainer,
  topLoser,
}: StatsCardsProps) {
  return (
    <div className='grid md:grid-cols-3 gap-4 mb-8'>
      <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
        <p className='text-gray-400 text-sm mb-2'>Total Coins</p>

        <h2 className='text-3xl font-bold text-white'>{totalCoins}</h2>
      </div>

      <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
        <p className='text-gray-400 text-sm mb-2'>Top Gainer</p>

        <h2 className='text-xl font-bold text-green-400'>
          {topGainer?.symbol.toUpperCase()}
        </h2>

        <p className='text-white'>
          {topGainer?.price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>

      <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
        <p className='text-gray-400 text-sm mb-2'>Top Loser</p>

        <h2 className='text-xl font-bold text-red-400'>
          {topLoser?.symbol.toUpperCase()}
        </h2>

        <p className='text-white'>
          {topLoser?.price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
