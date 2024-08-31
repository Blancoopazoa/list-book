import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../types/Book";

interface BookState {
  books: Book[];
  readingList: Book[];
}

const initialState: BookState = {
  books: [],
  readingList: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    addToReadingList(state, action: PayloadAction<number>) {
      const book = state.books.find((book) => book.id === action.payload);
      if (book && !book.inReadingList) {
        book.inReadingList = true;
        state.readingList.push(book);
      }
    },
    removeFromReadingList(state, action: PayloadAction<number>) {
      const index = state.readingList.findIndex(
        (book) => book.id === action.payload
      );
      if (index !== -1) {
        const book = state.readingList[index];
        book.inReadingList = false;
        state.readingList.splice(index, 1);
      }
    },
    filterByGenre(state, action: PayloadAction<string>) {
      // Implementar filtrado por género si es necesario.
    },
  },
});

export const {
  setBooks,
  addToReadingList,
  removeFromReadingList,
  filterByGenre,
} = bookSlice.actions;

export default bookSlice.reducer;
