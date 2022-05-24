import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Books from "./Books/Books.jsx";
import FavoriteBooks from "./FavoriteBooks/FavoriteBooks.jsx";
import FindBook from "./FindBook/FindBook.jsx";

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/FavoriteBooks" element={<FavoriteBooks />} />
          <Route path="/FindBook" element={<FindBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
