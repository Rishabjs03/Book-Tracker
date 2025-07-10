import { useContext, createContext, useState, useEffect } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export default function BookContextProcider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
