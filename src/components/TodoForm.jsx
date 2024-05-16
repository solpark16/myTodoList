import React, { useState } from "react";
import Button from "./Button";

const TodoForm = ({ todo, setTodo }) => {
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("제목과 내용을 모두 채워주세요.");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      title,
      body,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <form onSubmit={addTodoHandler} className="todoForm" type="submit">
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>내용</label>
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <Button>추가하기</Button>
    </form>
  );
};

export default TodoForm;
