import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Wishlist from "./pages/Wishlist";
import Allbooks from "./pages/Allbooks";
import AddBooks from "./pages/AddBooks";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/allbooks" element={<Allbooks />} />
        <Route path="/add-books" element={<AddBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
