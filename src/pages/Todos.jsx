import React, { useState } from "react";
import TodoList from "../components/todos/TodoList";

function Todos() {
  // js 자리

  const [todosArr, setTodosArr] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();

      setTodosArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getTodos();

  function makeTodosList() {
    let list = [];
    list = todosArr.map(function (요소, index) {
      return <TodoList key={index}></TodoList>;
    });
    return list;
  }
  function resetList() {
    setTodosArr([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Todos 목록
        <button onClick={getTodos}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
        <div>
          {todosArr.map(function (요소, 인덱스) {
            return (
              <TodoList
                userid={요소.userId}
                id={요소.id}
                title={요소.title}
                completed={요소.completed}
                key={인덱스}
              />
            );
          })}
        </div>
      </h1>
    </div>
  );
}

export default Todos;
