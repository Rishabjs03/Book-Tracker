import { useBookContext } from "../context/BookContext";

const AllBooks = () => {
  const { books, setBooks } = useBookContext();

  function handleComplete(id) {
    setBooks((books) =>
      books.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">All Books</h1>
      {books.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className={`bg-white p-4 rounded shadow border ${
                book.completed ? "border-green-400" : ""
              }`}
            >
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Genre: {book.genre}</p>

              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="mt-2 w-full h-48 object-cover rounded"
                />
              )}

              <div className="mt-3">
                {book.completed ? (
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✅ Completed
                  </span>
                ) : (
                  <button
                    onClick={() => handleComplete(book.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
