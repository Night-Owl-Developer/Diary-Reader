// import React, { useState } from 'react';
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for books"/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
