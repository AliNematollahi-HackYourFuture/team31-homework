
import { useState } from "react";
import { useTodos } from "./TodoContext";

export default function TodoList() {
  const { state, dispatch } = useTodos();
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div>
      <h4>Todo List</h4>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
