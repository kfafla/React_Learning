import { useState } from "react";
const BookInput = ({ onAddBook}) => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [year,setYear] = useState("")

    const handleAddBook = () => {
        const book = {title,author,year};
        onAddBook(book)
        setTitle("");
        setAuthor("")
        setYear("")
    }

    return (
      <div className="book-input">
        <input
          type="text"
          placeholder="书名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="作者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="出版年份"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={handleAddBook}>添加图书</button>
      </div>
    );

}

export default BookInput;