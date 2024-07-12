import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoslice'

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
    <form onSubmit={addTodoHandler} className=' '>
        <input 
        type='text'
        placeholder='enter your todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button 
        type='submit'
        >
            Add todo
        </button>
    </form>
    </>
  )
}

export default AddTodo
