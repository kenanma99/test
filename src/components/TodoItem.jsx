export function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      key={todo.id}
    >
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => toggleTodo(todo.id)}>Done</button>
      {/*callback lesson remember it*/}
    </li>
  );
}
