import {useState, useEffect} from "react"
import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('')

    const persistData = (newList) => {
        localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }
    const handleAddTodos = (newTodo) => {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }
    const handleEditTodos = (index) => {
        setTodoValue(todos[index])
        handleDeleteTodos(index);
    }

    const handleDeleteTodos = (index) => {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index;
        })
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }
        let localTodos = localStorage.getItem('todos');
        if (!localTodos) {
            return;
        }

        if (localTodos) {
            localTodos = JSON.parse(localTodos).todos
            setTodos(localTodos)
        }
    }, [])

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
            <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
        </>
    );
}

export default App;
