import React, { useState } from 'react';

const TodoInput = (props) => {
    const {handleAddTodos} = props;
    const [todoValue, setTodoValue] = useState('')
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