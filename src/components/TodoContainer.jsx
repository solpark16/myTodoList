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
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("제목과 내용을 모두 채워주세요.");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      body: body,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };
  const deleteTodoHandler = (id) => {
    const deletedTodo = todo.filter((todo) => {
      return todo.id != id;
    });
    setTodo(deletedTodo);
  };
  const isDoneTodoHandler = ({ id, isDone }) => {
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
      <TodoForm
        addTodoHandler={addTodoHandler}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
      />
      <TodoList
        title="Working"
        isDone={false}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        isDoneTodoHandler={isDoneTodoHandler}
      />
      <TodoList
        title="Done"
        isDone={true}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        isDoneTodoHandler={isDoneTodoHandler}
      />
    </div>
  );
};

export default TodoContainer;
