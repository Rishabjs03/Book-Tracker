import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 bg-zinc-400 w-full ">
      <div className="flex justify-between items-center h-full px-4">
        <div className="flex items-center justify-center cursor-pointer">
          <h1 className="text-3xl  font-bold text-black ">Book Tracker</h1>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="text-black hover:text-blue-500 text-xl font-semibold  mx-2"
          >
            Home
          </Link>
          <Link
            to="/allbooks"
            className="text-black hover:text-blue-500 text-xl font-semibold mx-2"
          >
            All Books
          </Link>
          <Link
            to="/wishlist"
            className="text-black hover:text-blue-500 text-xl font-semibold mx-2"
          >
            Wishlist
          </Link>
          <Link
            to="/read"
            className="text-black hover:text-blue-500 text-xl font-semibold mx-2"
          >
            Read
          </Link>
        </div>
        <div>
          <Link
            to="/add-books"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            + Add Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
