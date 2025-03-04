import React, { useState } from "react";

function TodoApp() {
  // 状态变量：待办事项列表
  const [todos, setTodos] = useState([]);
  // 状态变量：输入框的内容
  const [input, setInput] = useState("");

  // 添加待办事项
  const handleAddTodo = () => {
    if (input.trim() === "") return; // 如果输入为空，不添加
    setTodos([...todos, { text: input, completed: false }]);
    setInput(""); // 清空输入框
  };

  // 切换事项的完成状态
  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>添加代办事项</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => handleToggleCompleted(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
