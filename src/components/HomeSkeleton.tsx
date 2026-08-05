export default function HomeSkeleton() {
  return (
    <div className='max-w-6xl mx-auto px-8 py-8 animate-pulse'>
      {/* DashboardHero */}
      <div className='mb-10 rounded-3xl border border-white/10 bg-white/5 p-8'>
        <div className='h-12 w-80 rounded-xl bg-white/10 mb-4' />
        <div className='h-6 w-96 rounded-xl bg-white/10' />
      </div>

      {/* StatsCards */}
      <div className='grid md:grid-cols-3 gap-4 mb-8'>
        <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
          <div className='h-4 w-24 rounded bg-white/10 mb-4' />
          <div className='h-8 w-20 rounded bg-white/10' />
        </div>

        <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
          <div className='h-4 w-24 rounded bg-white/10 mb-4' />
          <div className='h-8 w-28 rounded bg-white/10 mb-3' />
          <div className='h-5 w-16 rounded bg-white/10' />
        </div>

        <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
          <div className='h-4 w-24 rounded bg-white/10 mb-4' />
          <div className='h-8 w-28 rounded bg-white/10 mb-3' />
          <div className='h-5 w-16 rounded bg-white/10' />
        </div>
      </div>

      {/* SearchBar */}
      <div className='h-14 rounded-2xl bg-white/5 mb-6' />

      {/* FilterTabs */}
      <div className='flex justify-start mb-6'>
        <div className='flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1'>
          <div className='h-10 w-28 rounded-xl bg-white/10' />
          <div className='h-10 w-28 rounded-xl bg-white/10' />
        </div>
      </div>

      {/* SortButtons */}
      <div className='flex justify-end mb-6'>
        <div className='flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1'>
          <div className='h-10 w-28 rounded-xl bg-white/10' />
          <div className='h-10 w-24 rounded-xl bg-white/10' />
          <div className='h-10 w-32 rounded-xl bg-white/10' />
        </div>
      </div>

      {/* CoinsTable */}
      <div className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='p-6 space-y-4'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className='h-14 rounded-xl bg-white/5' />
          ))}
        </div>
      </div>
    </div>
  );
}
