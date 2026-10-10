import { ToDoList } from "./components/TodoList";
import { RemoteTodos } from "./components/RemoteTodos";
import { RemoteTodosByAsync } from "./components/RemoteTodosByAsync";
import { SearchUsers } from "./components/SearchUsers";
function App() {
  return (
    <>
    <SearchUsers />
      <ToDoList />
      <RemoteTodos />
      <RemoteTodosByAsync />
    </>
  );
}

export default App;
