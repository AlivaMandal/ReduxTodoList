import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todoslice'
import { removeTodo } from '../features/todoslice'

function Todos() {
    const todos = useSelector( state => state.todos )
    const dispatch = useDispatch()
    const [isTodoEditable,setIsTodoEditable] = useState(false)

    const handleUpdate = (todo) =>{
      todo.preventDefault()
      dispatch(updateTodo(input))
      setIsTodoEditable(false)
    }

    const addTodoHandler = (e) =>{
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
    }
  return (
    <>
      <div> Todos</div>
      {
        todos.map((todo) =>(
            <li key={todo.id}>
                {todo.text}
               <button onClick={ addTodoHandler}
               onChange={handleUpdate}
             >  
              edit </button>
                <button onClick={ () => dispatch(removeTodo(todo.id))}> X </button>
            </li>
        ))
      }
    </>
  )
}

export default Todos
