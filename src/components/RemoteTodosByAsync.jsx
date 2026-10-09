import { useState, useEffect } from "react";

export function RemoteTodosByAsync() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function loadTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        const data = await response.json();
        setTodos(data);
      } catch (e) {
        console.log(e.message);
        setError("Error while loading !");
      } finally {
        setLoading(false);
      }
    }
    loadTodos();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
