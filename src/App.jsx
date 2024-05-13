import React, { useState } from "react";
import Todo from "./components/Todo";
import Button from "./components/Button";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id : new Date().getTime(),
      title : "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id : new Date().getTime() + 1,
      title : "타입스크립트 공부하기",
      body: "타입스크립트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (title === "" || body === ""){
      alert('제목과 내용을 모두 채워주세요.')
      return false;
    }
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      body: body,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    const deletedTodo = todo.filter((todo) => {
      return todo.id != id;
    });
    setTodo(deletedTodo);
  };
  const isDoneTodoHandler = ({ id, title, body, isDone }) => {
    const submitTodo = todo.filter((todo)=>{
      return todo.id != id;
    });
    const newTodo = {
      id : id,
      title : title,
      body : body,
      isDone : !isDone
    }
    setTodo([...submitTodo, newTodo])
  }
  return (
    <div className="wrap">
      <h1>Sol's Todo List</h1>
      <form className="todoForm" type="submit">
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
        <Button onClick={addTodoHandler}>추가하기</Button>
      </form>
      <div>
        <h2>Working</h2>
        <ul>
          {todo
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map(function (todo) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodoHandler={deleteTodoHandler}
                  isDoneTodoHandler = {isDoneTodoHandler}
                  text = "완료"
                />
              );
            })}
        </ul>
        <h2>Done</h2>
        <ul>
          {todo
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map(function (todo) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodoHandler={deleteTodoHandler}
                  isDoneTodoHandler = {isDoneTodoHandler}
                  text = "취소"
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;