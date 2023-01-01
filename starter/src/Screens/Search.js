import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BookAPI from "../BooksAPI";
import Book from "../Components/Book";

const Search = ({ updateBookShelf, books }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState(books);
  console.log(searchedBooks);

  const updateQuery = (newValue) => {
    setQuery(newValue);
  };

  useEffect(() => {
    const searchBook = async () => {
      const res = await BookAPI.search(query);
      console.log(res);
      setSearchedBooks(res);
    };

    searchBook();
  }, [query]);

  // const updateQuery = (d) => {
  //   setQuery(d);
  //   const setSearch = async () => {
  //     const res = await BookAPI.search(query);
  //     setSearchedBooks(res);
  //     console.log(searchedBooks);
  //   };
  //   setSearch();
  // };

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
          {books.map((b) => (
            <Book key={b.id} book={b} changeBookShelf={updateBookShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
