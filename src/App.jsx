import TodoAdd from "./components/todo/TodoAdd";
import TodoList from "./components/todo/TodoList";
import { TodayContextProvider } from "./TodayContext";

function App() {
  return (
    <TodayContextProvider>
      <h1>할일 서비스 : Context 와 Reducer 활용</h1>
      <TodoAdd />
      <TodoList />
    </TodayContextProvider>
  );
}

export default App;
