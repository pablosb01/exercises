import React, { useState } from "react";

function TodoList() {

    const [todos, setTodos] = useState([
        'todo1',
        'todo2',
        'todo3',
        'todo4',
        'todo5'
    ])

    const [newTodo, setNewTodo] = useState('')

    function addTodo(){
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    }

    return(
        <>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button onClick={addTodo}>Add</button>
        </>
    )
} 

export default TodoList;