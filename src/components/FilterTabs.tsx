type FilterTabsProps = {
  activeTab: 'all' | 'favorites';
  onTabChange: (tab: 'all' | 'favorites') => void;
};

export default function FilterTabs({
  activeTab,
  onTabChange,
}: FilterTabsProps) {
  return (
    <div className='flex justify-start mb-6'>
      <div className='flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md'>
        <button
          onClick={() => onTabChange('all')}
          className={`px-4 py-2 rounded-xl transition-colors cursor-pointer ${
            activeTab === 'all'
              ? 'bg-white/10 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          All Coins
        </button>

        <button
          onClick={() => onTabChange('favorites')}
          className={`px-4 py-2 rounded-xl transition-colors cursor-pointer ${
            activeTab === 'favorites'
              ? 'bg-white/10 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Favorites
        </button>
      </div>
    </div>
  );
}
