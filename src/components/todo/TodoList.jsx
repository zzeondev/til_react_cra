import { useContext } from "react";
import { TodayContext } from "../../TodayContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, dispatch } = useContext(TodayContext);
  return (
    <div>
      <h2>TodoList</h2>
      <div>
        {todos.map(item => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
