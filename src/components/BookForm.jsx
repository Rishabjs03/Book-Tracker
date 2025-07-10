import { useState } from "react";
import { useBookContext } from "../context/BookContext";

const BookForm = () => {
  const { books, setBooks } = useBookContext();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    cover: "",
    completed: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      ...formData,
      addedAt: new Date().toISOString(),
    };
    setBooks([...books, newBook]);
    setFormData({
      title: "",
      author: "",
      genre: "",
      description: "",
      cover: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-6 py-4 mb-6 space-y-4"
    >
      <h2 className="text-xl font-bold">Add a New Book</h2>

      <input
        className="w-full p-2 border rounded"
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        className="w-full p-2 border rounded"
        type="text"
        name="author"
        placeholder="Author Name"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input
        className="w-full p-2 border rounded"
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <button
        onClick={() => setBooks([...books, formData])}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
