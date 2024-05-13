import React from "react";
import Button from "./Button";

const Todo = ({ todo, deleteTodoHandler, isDoneTodoHandler, text }) => {
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
          onClick={() => isDoneTodoHandler(todo)}
        >
          {text}
        </Button>
      </div>
    </li>
  );
};

export default Todo;
