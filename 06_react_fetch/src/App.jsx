import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
          <li>
            <Link to="/">文章列表</Link>
          </li>
          <li>
            <Link to="/create">新建文章</Link>
          </li>
          <li>
            <Link to="/movies">电影列表</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
