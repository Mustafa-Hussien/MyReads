import Book from "./Book";

const Shelf = ({ title, books, updatedBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <Book key={b.id} book={b} changeBookShelf={updatedBookShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
