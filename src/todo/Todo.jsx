import { useState, useEffect } from 'react'
import { Store } from '../store/store'
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  const [input, setInput] = useState("")
  const handleEnter = e => e.key === "Enter" && (storeLocal.addTodo(input), setInput(""))

  useEffect(() => {
    localStorage.setItem("dailyTodos", JSON.stringify(Store.getState().daily.todos))
    localStorage.setItem("dailyDones", JSON.stringify(Store.getState().daily.dones))
    localStorage.setItem("weeklyTodos", JSON.stringify(Store.getState().weekly.todos))
    localStorage.setItem("weeklyDones", JSON.stringify(Store.getState().weekly.dones))
    localStorage.setItem("monthlyTodos", JSON.stringify(Store.getState().monthly.todos))
    localStorage.setItem("monthlyDones", JSON.stringify(Store.getState().monthly.dones))
  }, [storeLocal])

  return (
    <div className='Todo'>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h1>
      <ul className='todos'>
        {storeLocal.todos.map(e => (
          <li key={e.index} onClick={() => storeLocal.markTodoAsDone(e)}>{e.content}</li>
        ))}
      </ul>
      <ul className='dones'>
        {storeLocal.dones.map(e => (
          <li key={e.index} onClick={() => storeLocal.markDoneAsTodo(e)}>{e.content}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => storeLocal.removeAllCompleted()}>Remove All Completed</button>
        <input
          type="text"
          placeholder='Type a new goal and press Enter'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => handleEnter(e)}
        />
      </div>
    </div>
  )
}