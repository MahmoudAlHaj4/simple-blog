
interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder, onSearch }:SearchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-sm text-gray-300 rounded-lg focus:outline-none focus:ring-2"
      />
      <button
        className="absolute right-2 top-2 text-gray-400 hover:text-white"
        aria-label="Search"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
