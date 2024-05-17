import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Store } from '../store/store'
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  const [input, setInput] = useState("")
  const [hide1, setHide1] = useState(`${JSON.parse(localStorage.getItem(`${type}.hide1`)) || ""}`)
  let todosSize = storeLocal.todos.length + storeLocal.dones.length
  let completed = parseInt((storeLocal.dones.length / (storeLocal.todos.length + storeLocal.dones.length)) * 100)
  const handleEnter = e => (e.key === "Enter" && input && input[0] !== " ") && (storeLocal.addTodo(input), setInput(""))

  useEffect(() => {
    localStorage.setItem(`${type}Todos`, JSON.stringify(storeLocal.todos))
    localStorage.setItem(`${type}Dones`, JSON.stringify(storeLocal.dones))
  }, [storeLocal])

  useEffect(() => localStorage.setItem(`${type}.hide1`, JSON.stringify(hide1)), [hide1])

  return (
    <div className='Todo main-component'>
      <div className="header">
        <div className={`header-left ${todosSize === 0 ? "hide" : ""}`}>Completed: <span className='completed'>{completed}%</span></div>
        <div className='header-right' onClick={() => { hide1 === "" ? setHide1("hide") : setHide1("") }}>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</div>
      </div>
      <ul className={`todos-dones secondary-component ${todosSize === 0 ? "hide" : ""} ${hide1}`}>
        {storeLocal.todos.map(e => (
          <li key={e.index} className='todos' onClick={() => storeLocal.markTodoAsDone(e)}>{e.content}</li>
        ))}
        {storeLocal.dones.map(e => (
          <li key={e.index} className='dones' onClick={() => storeLocal.markDoneAsTodo(e)}>{e.content}</li>
        ))}
      </ul>
      <div className={`btn-input ${hide1}`}>
        <button className='button' onClick={() => storeLocal.removeAllCompleted()}>Remove All Completed</button>
        <input
          type="text"
          placeholder='Type a new goal and press Enter'
          className='input'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => handleEnter(e)}
        />
      </div>
    </div>
  )
}

Todo.propTypes = {
  type: PropTypes.string,
  storeLocal: PropTypes.object
}