import { useState } from "react"
import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  const handleEditTodos = (index) => {

  }

  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    setTodos(newTodoList);
  }

  return (
  <>
    <TodoInput handleAddTodos={handleAddTodos}/>
    <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos}/>
  </>
  );
}

export default App;
