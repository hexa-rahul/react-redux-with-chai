import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch();
    console.log("todos reducer", todos);

  return (
    <div>
        {
            todos && todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
                
            ))
        }
    </div>
  )
}

export default Todo