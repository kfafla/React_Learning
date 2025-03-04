import React from "react";
import ThemeToggle from "./assets/components/ThemeToggle";
import TodoList from "./assets/components/TodoList";
import FetchData from "./assets/components/FetchData";
import PageTitle from "./assets/components/PageTitle";
import Timenow from "./assets/components/Timenow";
import Weather from "./assets/components/Weather";
import UserPage from "./assets/components/UserPage";
import { UserProvider } from "./assets/context/UserContext1";
import UserStatus from "./assets/components/UserStatus";
import LoginForm from "./assets/components/LoginForm";
import LogoutButton from "./assets/components/LogoutButton";
import Counter from "./assets/components/CountReducer";
import ThemeProvider from "./assets/components/ThemeProvider";
import ThemeButton from "./assets/components/ThemeButton";
// import './App.css'; // 引入全局样式
import TextInput from "./assets/components/TextInput";
import Form from "./assets/components/FormReducer";
const App = () => {
  return (
    // <ThemeToggle></ThemeToggle>
    // <TodoList></TodoList>
    // <FetchData></FetchData>
    // <PageTitle></PageTitle>
    // <Timenow></Timenow>
    // <Weather></Weather>

    // <TextInput></TextInput>
    // <Counter></Counter>
    // <Form></Form>
    // <div>
    //   <ThemeProvider>
    //     <ThemeButton />
    //   </ThemeProvider>
    // </div>
       <UserPage />

    // <UserProvider>
    //   <div className="container">
    //     <h1>用户管理系统</h1>
    //     <LoginForm />
    //     <LogoutButton />
    //     <div className="user-status">
    //       <UserStatus />
    //     </div>
    //   </div>
    // </UserProvider>
  );
}
export default App