import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todo, deleteTodoHandler, isDoneTodoHandler}) => {
    return (
      <div>
        <h2>Working</h2>
        <ul>
          {todo
            .filter((todo) => {
              return todo.isDone === false;
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
        <h2>Done</h2>
        <ul>
          {todo
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map(function (todo) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodoHandler={deleteTodoHandler}
                  isDoneTodoHandler={isDoneTodoHandler}
                  text="취소"
                />
              );
            })}
        </ul>
      </div>
    );
  };

export default TodoList