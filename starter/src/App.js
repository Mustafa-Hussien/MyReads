import "./App.css";
import Search from "./Screens/Search";
import Home from "./Screens/Home";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        b.shelf = whereTo;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    BookAPI.update(book, whereTo);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home updateBookShelf={updateBookShelf} books={books} />}
        />
        <Route
          path="/search"
          element={<Search updateBookShelf={updateBookShelf} books={books} />}
        />
      </Routes>
    </div>
  );
}

export default App;
