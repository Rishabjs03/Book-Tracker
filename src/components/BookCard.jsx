import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, description, imageLinks, categories } =
    book.volumeInfo;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-sm line-clamp-3">
          {description || "No description available."}
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        {categories?.[0] && (
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mr-2">
            {categories[0]}
          </span>
        )}
        {authors?.length > 0 && (
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            {authors.join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
