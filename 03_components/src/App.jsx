// import WelcomeClass from "./components/WelcomeClass";
// import StudentClass from "./components/StudentClass";

// import RandomName from "./components/RandomName";

// import WelcomeFunc from "./components/WelcomeFunc";
// import Header from "./components/PhoneCard/Header";
// import Footer from "./components/PhoneCard/Footer";
// import Main from "./components/PhoneCard/Main";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";
// import Card from "./components/Card";
// const App = ()=> {
   // const studentData = {
   //   name: "小铭",
   //   age: 23,
   //   avatar:
   //     "https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300", // 替换为实际头像链接
   //   homepage:
   //     "https://www.mosoteach.cn/web/index.php?c=member&m=index&clazz_course_id=D34FCDC6-EBF9-11EF-B5BC-9C63C078B890",
   // };

   // const handleClick = () => {
   //    alert("点击了按钮11")
   // }
  //  return (
     <>
       {/* <WelcomeClass name="World" /> */}
       {/* <WelcomeFunc name="World"/> */}
       {/* <div>
         <StudentClass {...studentData} />
       </div> */
      //  <RandomName />
      // <div>
      //    <Header />
      //    <Main />
      //    <Footer />
      // </div>
      // <Button onClick={handleClick} /
      }
      {/* <div>
         <UserPage />
      </div> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <RegistPage /> */}
      {/* <Card 
        header={<h1>标题</h1>}
        body={<div>内容</div>}
        footer={<button>按钮</button>}
      /> */}
     </>
//    );
// };
import { useState } from "react";
import BookInput from "./components/Book/BookInput";
import BookList from "./components/Book/BookList";
import BookDetail from "./components/Book/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book])
  }

  const deleteBook = (book) => {
    setBooks(books.filter((b) => b !== book))
    setSelectedBook(null)
  }

const editBook = (updatedBook) => {
  setBooks(
    books.map((b) => (b === selectedBook ? updatedBook : b))
  )
  setSelectedBook(updatedBook)
}
return (
  <div className="app">
    <h1>图书管理系统</h1>
    <BookInput onAddBook={addBook} />
    <BookList
      books={books}
      onSelectBook={setSelectedBook}
      onDeleteBook={deleteBook}
    />
    {selectedBook && <BookDetail book={selectedBook} onEditBook={editBook} />}
  </div>
);
}

export default App;