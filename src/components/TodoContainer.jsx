import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todo, setTodo] = useState([
    {
      id: new Date().getTime(),
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: new Date().getTime() + 1,
      title: "타입스크립트 공부하기",
      body: "타입스크립트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const deleteTodoHandler = (id) => {
    const deletedTodo = todo.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(deletedTodo);
  };
  const toggleTodoHandler = ({ id, isDone }) => {
    const changeStatus = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !isDone,
        };
      }
      return item;
    });
    setTodo(changeStatus);
  };
  return (
    <div className="wrap">
      <h1>Sol's Todo List</h1>
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList
        isDone={false}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
      <TodoList
        isDone={true}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
    </div>
  );
};

export default TodoContainer;
