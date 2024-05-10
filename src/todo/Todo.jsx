import { useState, useEffect } from 'react'
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e)
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("send data to store");
      storeLocal.addTodo(input)
      setInput("")
    }
  }

  useEffect(() => {
    console.log(storeLocal.todos);
  }, [storeLocal])

  return (
    <div className='Todo'>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h1>
      <ul>
        {storeLocal.todos.map(element => (
          <li key={element.index}>{element.content}</li>
        ))}
        {storeLocal.dones.map(element => (
          <li key={element.index}>{element.content}</li>
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