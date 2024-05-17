import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { previousInterval } from '../store/alarm';
import './CompletedTasks.css'

export const CompletedTasks = ({ type, storeLocal }) => {
  console.log("CompletedTasks component was rendered");
  const [input, setInput] = useState("")
  const [hide1, setHide1] = useState(`${JSON.parse(localStorage.getItem(`${type}.hide1`)) || ""}`)
  const [warn1, setWarn1] = useState("")
  const previousIntervalStr = `${previousInterval().hi}:${previousInterval().mi}  -  ${previousInterval().hf}:${previousInterval().mf}`
  const lastCompletedTaskInterval = storeLocal.dones.length === 0 ? null : storeLocal.dones.at(-1).interval
  let doneSize = storeLocal.dones.length
  let workedHours = doneSize / 4
  let timeoutId = null

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (!input) setWarn1("Type something and then press Enter Key")
      if (input && input[0] == " ") setWarn1("Avoid adding spaces at the start")
      if (input && input[0] !== " " && previousIntervalStr === lastCompletedTaskInterval) {
        setWarn1("Wait until next interval time to add a new completed task")
      }
      if (input && input[0] !== " " && previousIntervalStr !== lastCompletedTaskInterval) {
        storeLocal.addTodo(previousIntervalStr, input)
        setInput("")
        setWarn1("")
      }
    }
  }

  useEffect(() => localStorage.setItem("completedTasks", JSON.stringify(storeLocal.dones)), [storeLocal])

  useEffect(() => {
    timeoutId = setTimeout(() => setWarn1(""), 5000)
    return () => clearTimeout(timeoutId)
  }, [warn1]);

  useEffect(() => localStorage.setItem(`${type}.hide1`, JSON.stringify(hide1)), [hide1])

  return (
    <div className='CompletedTasks Todo main-component'>
      <div className="header">
        <div className={`header-left ${doneSize === 0 ? "hide" : ""}`}>Worked Hours: <span className='completed'>{workedHours}</span></div>
        <div className='header-right' onClick={() => { hide1 === "" ? setHide1("hide") : setHide1("") }}>Completed Tasks</div>
      </div>
      <ul className={`todos-dones secondary-component ${doneSize === 0 ? "hide" : ""} ${hide1}`}>
        {storeLocal.dones.map(e => (
          <li key={e.index} className='dones'>{e.interval} {"=>"} {e.content}</li>
        ))}
      </ul>
      <div className={warn1 === "" ? "hide" : ""}>{warn1}</div>
      <div className={`btn-input ${hide1}`}>
        <button className='button' onClick={() => storeLocal.removeAllCompleted()}>Delete All Tasks</button>
        <div className='interval-input input'>
          <span>{previousIntervalStr}</span>
          <input
            type="text"
            placeholder='Type a completed task and press Enter'
            className='input'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => handleEnter(e)}
          />
        </div>
      </div>
    </div>
  )
}

CompletedTasks.propTypes = {
  type: PropTypes.string,
  storeLocal: PropTypes.object
}