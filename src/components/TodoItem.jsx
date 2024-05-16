import React from "react";
import Button from "./Button";

const TodoItem = ({ todo, deleteTodoHandler, toggleTodoHandler, text }) => {
  const { id, title, body } = todo;
  return (
    <li className="todoCard">
      <p className="todoTitle">{title}</p>
      <p className="todoBody">{body}</p>
      <div className="btnBox">
        <Button className="todoDelBtn" onClick={() => deleteTodoHandler(id)}>
          삭제하기
        </Button>
        <Button
          className="todoIsDoneBtn"
          onClick={() => toggleTodoHandler(todo)}
        >
          {text}
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
