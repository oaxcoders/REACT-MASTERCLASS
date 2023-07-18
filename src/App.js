import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    setTodos([text, ...todos]);
    setText("");
  };
  const onDelete = (item, index) => {
    const cloneTodos = [...todos];
    const filterTodos = cloneTodos.filter((it) => it !== item);
    setTodos(filterTodos);
  };

  return (
    <>
      <h1>To do list</h1>
      <input type="text" value={text} onChange={onChange} />
      <button type="button" onClick={onClick}>
        Do it
      </button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <input
              type="button"
              value="삭제"
              onClick={() => onDelete(item, index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
