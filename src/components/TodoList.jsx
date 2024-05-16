import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ isDone, todo, deleteTodoHandler, toggleTodoHandler }) => {
  return (
    <>
      <h2>{isDone ? "Done" : "Working"}</h2>
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
                toggleTodoHandler={toggleTodoHandler}
                text={isDone ? "취소" : "완료"}
              />
            );
          })}
      </ul>
    </>
  );
};

export default TodoList;
