import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Store } from '../store/store'
import './CompletedTasks.css'

export const CompletedTasks = ({ storeLocal }) => {
  const [input, setInput] = useState("")
  const [hide1, setHide1] = useState("")
  let doneSize = storeLocal.dones.length
  let workedHours = doneSize / 4
  const handleEnter = e => e.key === "Enter" && (storeLocal.addTodo(input), setInput(""))

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(Store.getState().tasks.dones))
  }, [storeLocal])

  return (
    <div className='Todo main-component'>
      <div className="header">
        <div className={`header-left ${doneSize === 0 ? "hide" : ""}`}>Worked Hours: <span className='completed'>{workedHours}</span></div>
        <div className='header-center' onClick={() => { hide1 === "" ? setHide1("hide") : setHide1("") }}>Completed Tasks</div>
        <div className="header-right"></div>
      </div>
      <ul className={`todos-dones secondary-component ${doneSize === 0 ? "hide" : ""} ${hide1}`}>
        {storeLocal.dones.map(e => (
          <li key={e.index} className='dones'>{e.content}</li>
        ))}
      </ul>
      <div className={`btn-input ${hide1}`}>
        <button className='button' onClick={() => storeLocal.removeAllCompleted()}>Delete All Tasks</button>
        <input
          type="text"
          placeholder='Type a completed task and press Enter'
          className='button'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => handleEnter(e)}
        />
      </div>
    </div>
  )
}

CompletedTasks.propTypes = {
  type: PropTypes.string,
  storeLocal: PropTypes.object
}