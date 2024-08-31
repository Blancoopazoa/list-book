import libraryData from "../data/books.json";
import { Book } from "../types/Book";

export const getBooks = (): Book[] => {
  return libraryData.library.map((entry) => entry.book as Book);
};

export const getBookByTitle = (title: string): Book | undefined => {
  return libraryData.library
    .map((entry) => entry.book as Book)
    .find((book) => book.title === title);
};
