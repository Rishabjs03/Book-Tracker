import { useContext, createContext, useState, useEffect } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export default function BookContextProcider({ children }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
