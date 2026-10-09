import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { TodoInput } from "./TodoInput";

export function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];

    //JSON.parse convert the string file to an array again
  }); //original and updated array
  const [newTodo, setNewTodo] = useState(""); //add a new item

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // "todos" is the name for the file we save in local storage.
    //local storage save only string files so we need stringify function.
  }, [todos]); //run useEffect only when todos got changed.

  function addTodo() {
    if (newTodo.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
    setNewTodo("");
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      }),
    );
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </>
  );
}
