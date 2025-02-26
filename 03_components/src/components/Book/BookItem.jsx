
const BookItem = ({ book, onSelect, onDelete, children }) => {
  return (
    <div className="book-item" onClick={onSelect}>
      {children}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        删除
      </button>
    </div>
  );
};

export default BookItem;
