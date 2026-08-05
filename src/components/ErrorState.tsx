type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className='max-w-lg mx-auto pt-20 text-center'>
      <div className='rounded-3xl border border-red-500/20 bg-red-500/10 p-8'>
        <div className='text-5xl mb-4'>⚠️</div>

        <h2 className='text-xl font-semibold text-white mb-2'>
          Something went wrong
        </h2>

        <p className='text-gray-400 mb-6'>{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className='px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white'
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
