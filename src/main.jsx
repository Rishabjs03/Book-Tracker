import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BookContextProvider from "./context/BookContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
);
