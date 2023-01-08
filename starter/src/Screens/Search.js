import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BookAPI from "../BooksAPI";
import Book from "../Components/Book";

const Search = ({ updateBookShelf, books }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const updateQuery = (newValue) => {
    setQuery(newValue);
  };

  useEffect(() => {
    const searchBook = async () => {
      const res = await BookAPI.search(query.trim());
      if (res && res.error) {
        setSearchedBooks([]);
      } else {
        const booksWithThumbnail = res
          .filter(
            (b) => b.hasOwnProperty("imageLinks") && b.hasOwnProperty("authors")
          )
          .map((b) => {
            if (books.some((book) => b.id === book.id)) {
              books.map((book) => {
                if (b.id === book.id) {
                  b.shelf = book.shelf;
                }
              });
            } else {
              b.shelf = "none";
            }
            return b;
          });
        setSearchedBooks(booksWithThumbnail);
      }
    };
    if (query !== "") {
      searchBook();
    } else {
      setTimeout(() => setSearchedBooks([]), 1000);
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((b) => (
            <Book key={b.id} book={b} changeBookShelf={updateBookShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
