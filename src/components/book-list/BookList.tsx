import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/bookServices";
import { Book } from "../../types/Book";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchedBooks = getBooks();
    setBooks(fetchedBooks);
  }, []);

  return (
    <div>
      <h1>Lista de Libros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.ISBN}>
            <img src={book.cover} alt={book.title} width="50" />
            <strong>{book.title}</strong> - {book.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
