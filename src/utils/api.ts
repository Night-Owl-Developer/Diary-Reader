import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, { params: { q: query } });
    return response.data.items || [];
  } catch (error) {
    throw new Error('Failed to fetch books. Please try again later.');
  }
};
