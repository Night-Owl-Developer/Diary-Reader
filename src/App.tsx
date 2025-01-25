import React, { useState } from 'react';
import SearchBar from '../src/components/SearchBar';
import BookTable from '../src/components/BookTable';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { useFetchBooks } from './hooks/useFetchBooks';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error } = useFetchBooks(query);

  return (
    <div>
      <h1>Book Diary</h1>
      <SearchBar onSearch={setQuery} />
      <ErrorBoundary error={error} />
      {loading ? <p>Loading...</p> : <BookTable books={books} />}
    </div>
  );
};

export default App;
