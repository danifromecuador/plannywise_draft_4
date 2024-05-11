import { useState, useEffect } from 'react'
import { Store } from '../store/store'
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e)
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      storeLocal.addTodo(input)
      setInput("")
    }
  }

  useEffect(() => {
    localStorage.setItem("dailyTodos", JSON.stringify(Store.getState().daily.todos))
  }, [storeLocal])

  return (
    <div className='Todo'>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h1>
      <ul>
        {storeLocal.todos.map(e => (
          <li
            key={e.index}
            onClick={() => storeLocal.markTodoAsDone(e.index)}
          >
            {e.content}
          </li>
        ))}
        {storeLocal.dones.map(e => (
          <li
            key={e.index}
          >
            {e.content}
          </li>
        ))}
      </ul>
      <div>
        <button>Remove All Completed</button>
        <input
          type="text"
          placeholder='Type a new goal and press Enter'
          value={input}
          onChange={e => handleChange(e.target.value)}
          onKeyDown={e => handleEnter(e)}
        />
      </div>
    </div>
  )
}