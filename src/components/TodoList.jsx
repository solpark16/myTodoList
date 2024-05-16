import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  title,
  isDone,
  todo,
  deleteTodoHandler,
  isDoneTodoHandler,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {todo
          .filter((todo) => {
            return todo.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodoHandler={deleteTodoHandler}
                isDoneTodoHandler={isDoneTodoHandler}
                text="완료"
              />
            );
          })}
      </ul>
    </>
  );
};

export default TodoList;
