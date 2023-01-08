import "./App.css";
import Search from "./Screens/Search";
import Home from "./Screens/Home";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI";

function App() {
  const [APIBooks, setAPIBooks] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setResult(res);
    };
    getBooks();
  }, [APIBooks]);

  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = result.map((b) => {
      if (b.id === book.id) {
        b.shelf = whereTo;
        return b;
      }
      return b;
    });
    const updateAPI = async () => {
      await BookAPI.update(book, whereTo);
      setAPIBooks(updatedBooks);
    };

    updateAPI();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home updateBookShelf={updateBookShelf} books={result} />}
        />
        <Route
          path="/search"
          element={<Search updateBookShelf={updateBookShelf} books={result} />}
        />
      </Routes>
    </div>
  );
}

export default App;
