type SortButtonsProps = {
  sortBy: string;
  onSortChange: (value: string) => void;
};

export default function SortButtons({
  sortBy,
  onSortChange,
}: SortButtonsProps) {
  const buttons = [
    {
      label: 'Market Cap',
      value: 'market_cap',
    },
    {
      label: 'Price',
      value: 'price',
    },
    {
      label: '24h Change',
      value: 'change',
    },
  ];

  return (
    <div className='flex justify-end mb-6'>
      <div className='flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md'>
        {buttons.map((button) => (
          <button
            key={button.value}
            onClick={() => onSortChange(button.value)}
            className={`px-4 py-2 rounded-xl cursor-pointer transition-colors duration-200 ${
              sortBy === button.value
                ? 'bg-white/10 border border-white/10 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
