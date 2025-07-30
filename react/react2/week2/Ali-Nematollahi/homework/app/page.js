"use client";

import { createContext } from "react";

import { CounterProvider } from "./components/CounterContext";
import CounterDisplay from "./components/CounterDisplay";

import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

export const MyContext = createContext();
export default function Home() {
  return (
    <>
      <section>
        <h2 style={{ textAlign: "center", margin: "50px" }}>
          Counter Context with Reducer
        </h2>
        <CounterProvider>
          <CounterDisplay />
        </CounterProvider>
      </section>
      <hr />
      <section style={{ textAlign: "center"}}>
        <h2 style={{ textAlign: "center", margin: "50px" }}>
          Todo Context with a Reducer
        </h2>
        <TodoProvider>
          <div style={{ padding: 20 }}>
            <h3>My Todo App</h3>
            <TodoList />
          </div>
        </TodoProvider>
      </section>
    </>
  );
}
