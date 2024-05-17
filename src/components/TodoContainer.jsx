import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      title: "타입스크립트 공부하기",
      body: "타입스크립트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const deleteTodoHandler = (id) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };
  const toggleTodoHandler = ({ id, isDone }) => {
    const changeStatus = todos.map((item) =>
      item.id === id ? { ...item, isDone: !isDone } : item
    );
    setTodos(changeStatus);
  };
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <>
      <h1>Sol's Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        isDone={false}
        todos={workingTodos}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
      <TodoList
        isDone={true}
        todos={doneTodos}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
    </>
  );
};

export default TodoContainer;
