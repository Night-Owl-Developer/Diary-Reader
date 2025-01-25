import { useState, useEffect } from 'react';
import { fetchBooks } from '../utils/api';

export const useFetchBooks = (query: string) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchBooks(query);
        setBooks(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      loadBooks();
    }
  }, [query]);

  return { books, loading, error };
};
