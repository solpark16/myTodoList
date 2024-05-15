import React from "react";
import Button from "./Button";

const TodoForm = ({addTodoHandler, title, setTitle, body, setBody}) => {
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
