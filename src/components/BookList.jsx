import React, { useEffect, useState } from "react";
import BookCard from "./BookCard"; // 👈 import BookCard

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Harry Potter");
  const [loading, setLoading] = useState(false);

  async function fetchBooks() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="mb-6 flex gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books..."
          className="border px-4 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p>No books found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookList;
