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

    function resetTodo() {
        setTodos([])
    }

    function removeTodo (index) {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos)
    }


    return(
        <>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button onClick={addTodo}>Add</button>
            <button onClick={resetTodo}>Reset List</button>
        </>
    )
} 

export default TodoList;