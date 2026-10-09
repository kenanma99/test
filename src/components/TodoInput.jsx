export function TodoInput({ newTodo, setNewTodo, addTodo }) {
  return (
    <>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </>
  );
}
