type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className='mb-6'>
      <input
        type='text'
        placeholder='Search coin...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
}
