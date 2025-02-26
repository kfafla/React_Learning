import BookItem from "./BookItem";

const BookList = ({ books, onSelectBook, onDeleteBook }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          onSelect={() => onSelectBook(book)}
          onDelete={() => onDeleteBook(book)}
        >
          <h3>{book.title}</h3>
          <p>作者: {book.author}</p>
          <p>出版年份: {book.year}</p>
        </BookItem>
      ))}
    </div>
  );
};

export default BookList;
