import Shelf from "../Components/Shelf";
import { Link } from "react-router-dom";

const Home = ({ updateBookShelf, books }) => {
  const currentlyReading = books.filter((b) => b.shelf === "currentlyReading");
  const wantToRead = books.filter((b) => b.shelf === "wantToRead");
  const read = books.filter((b) => b.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          title="Currently Reading"
          books={currentlyReading}
          updatedBookShelf={updateBookShelf}
        />
        <Shelf
          title="Want to Read"
          books={wantToRead}
          updatedBookShelf={updateBookShelf}
        />
        <Shelf title="Read" books={read} updatedBookShelf={updateBookShelf} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
