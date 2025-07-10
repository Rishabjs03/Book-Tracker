import BookForm from "../components/BookForm";
import { useBookContext } from "../context/BookContext";

export default function AddBooks() {
  const { books, setBooks } = useBookContext();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Books</h1>
      <BookForm />
    </div>
  );
}
