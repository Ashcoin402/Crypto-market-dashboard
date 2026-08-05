export default function CoinDetailSkeleton() {
  return (
    <div className='max-w-5xl mx-auto px-6 py-8 animate-pulse'>
      {/* Back Button */}
      <div className='h-11 w-28 rounded-xl bg-white/5 border border-white/10 mb-6' />

      {/* Hero Card */}
      <div className='mb-8 rounded-3xl border border-white/10 bg-white/5 p-8'>
        <div className='flex items-center gap-5'>
          <div className='w-20 h-20 rounded-full bg-white/10' />

          <div className='flex-1'>
            <div className='h-12 w-72 rounded-xl bg-white/10 mb-4' />

            <div className='h-14 w-80 rounded-xl bg-white/10 mb-4' />

            <div className='h-6 w-32 rounded-xl bg-white/10' />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-2 gap-4 mb-8'>
        <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
          <div className='h-5 w-28 rounded bg-white/10 mb-3' />

          <div className='h-8 w-48 rounded bg-white/10' />
        </div>

        <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
          <div className='h-5 w-28 rounded bg-white/10 mb-3' />

          <div className='h-8 w-48 rounded bg-white/10' />
        </div>
      </div>

      {/* Chart Card */}
      <div className='rounded-3xl border border-white/10 bg-white/5 p-6 mb-8'>
        <div className='h-8 w-56 rounded bg-white/10 mb-6' />

        <div className='h-62.5 rounded-2xl bg-white/5' />
      </div>

      {/* About Card */}
      <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
        <div className='h-8 w-56 rounded bg-white/10 mb-6' />

        <div className='space-y-3'>
          <div className='h-4 w-full rounded bg-white/10' />
          <div className='h-4 w-full rounded bg-white/10' />
          <div className='h-4 w-11/12 rounded bg-white/10' />
          <div className='h-4 w-10/12 rounded bg-white/10' />
          <div className='h-4 w-8/12 rounded bg-white/10' />
        </div>
      </div>
    </div>
  );
}
