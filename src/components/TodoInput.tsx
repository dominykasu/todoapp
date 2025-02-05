import React from 'react';

const TodoInput = (props) => {
    const {handleAddTodos, todoValue, setTodoValue} = props;

    return (
        <header>
            <input placeholder="...enter Todo" value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}}/>
            <button onClick={() => {
                handleAddTodos(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    );
};

export default TodoInput;