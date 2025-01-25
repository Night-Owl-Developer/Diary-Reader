// import React from 'react';
import { Book } from '../types/book';

interface BookTableProps {
  books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Published Date</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.authors.join(', ')}</td>
            <td>{book.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
