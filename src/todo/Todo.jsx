import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  const [input, setInput] = useState("")
  const [hide1, setHide1] = useState(`${JSON.parse(localStorage.getItem(`${type}.hide1`)) || ""}`)
  const [warn1, setWarn1] = useState("")
  let todosSize = storeLocal.todos.length + storeLocal.dones.length
  let completed = parseInt((storeLocal.dones.length / (storeLocal.todos.length + storeLocal.dones.length)) * 100)
  let timeoutId = null

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (!input) setWarn1("Type something and then press Enter Key")
      if (input && input[0] == " ") setWarn1("Avoid adding spaces at the start")
      if (input && input[0] !== " ") {
        storeLocal.addTodo(input)
        setInput("")
        setWarn1("")
      }
    }
  }

  useEffect(() => {
    localStorage.setItem(`${type}Todos`, JSON.stringify(storeLocal.todos))
    localStorage.setItem(`${type}Dones`, JSON.stringify(storeLocal.dones))
  }, [storeLocal])

  useEffect(() => {
    timeoutId = setTimeout(() => setWarn1(""), 5000)
    return () => clearTimeout(timeoutId)
  }, [warn1])

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
      <div className={warn1 === "" ? "hide" : ""}>{warn1}</div>
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