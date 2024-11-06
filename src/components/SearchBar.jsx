import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-5 gap-3 mb-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="p-2 rounded-md w-80"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-2 rounded-md w-20 justify-center "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
