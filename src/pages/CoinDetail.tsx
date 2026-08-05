import { useParams, useNavigate } from 'react-router-dom';
import { useCoinDetail } from '../hooks/useCoinDetail';
import CoinDetailSkeleton from '../components/CoinDetailSkeleton';
import ErrorState from '../components/ErrorState';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function CoinDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { coin, chart, loading, error, refetch } = useCoinDetail(id!);
  const description =
    coin?.description.en
      ?.replace(/<[^>]+>/g, '')
      ?.split('. ')
      ?.slice(0, 5)
      ?.join('. ') || 'No description available.';
  console.log(coin);

  if (loading) return <CoinDetailSkeleton />;

  if (error) return <ErrorState message={error} onRetry={refetch} />;

  if (!coin)
    return <ErrorState message='Coin data not found' onRetry={refetch} />;

  return (
    <div className='max-w-5xl mx-auto px-6 py-8 text-white'>
      <button
        onClick={() => navigate(-1)}
        className='mb-6 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer'
      >
        ← Back
      </button>

      <div className='mb-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8'>
        <div className='flex items-center gap-5'>
          <img
            src={coin.image.large}
            alt={coin.name}
            className='w-20 h-20 rounded-full'
          />

          <div>
            <h1 className='text-4xl font-bold'>
              {coin.name}{' '}
              <span className='text-gray-400 uppercase text-xl'>
                {coin.symbol}
              </span>
            </h1>

            <p className='text-5xl font-semibold mt-2'>
              ${coin.market_data.current_price.usd.toLocaleString()}
            </p>

            <p
              className={
                coin.market_data.price_change_percentage_24h >= 0
                  ? 'text-green-400 mt-2'
                  : 'text-red-400 mt-2'
              }
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-8 text-sm'>
        <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
          <p className='text-gray-400 mb-2'>Market Cap</p>
          <p className='text-lg font-semibold'>
            ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>

        <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
          <p className='text-gray-400 mb-2'>24h Volume</p>
          <p className='text-lg font-semibold'>
            ${coin.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
      </div>

      <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
        <h2 className='text-xl font-semibold mb-4'>7-Day Price Chart</h2>

        <ResponsiveContainer width='100%' height={250}>
          <AreaChart data={chart}>
            <defs>
              <linearGradient id='colorPrice' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#6366f1' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#6366f1' stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey='date' tick={{ fill: '#9ca3af', fontSize: 11 }} />

            <YAxis
              domain={['auto', 'auto']}
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              width={80}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
              }}
              labelStyle={{ color: '#9ca3af' }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                'Price',
              ]}
            />

            <Area
              type='monotone'
              dataKey='price'
              stroke='#6366f1'
              fill='url(#colorPrice)'
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className='mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6'>
        <h2 className='text-xl font-semibold mb-4'>About {coin.name}</h2>

        <p className='text-gray-300 leading-8'>{description}</p>
      </div>
    </div>
  );
}
