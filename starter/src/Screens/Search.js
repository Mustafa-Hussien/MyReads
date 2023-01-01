import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import search from "../BooksAPI";
import Book from "../Components/Book";

const Search = ({ updateBookShelf, books }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((b) => (
            <Book key={b.id} book={b} changeBookShelf={updateBookShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
