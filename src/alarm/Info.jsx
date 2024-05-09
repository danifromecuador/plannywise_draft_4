import { useState } from 'react'
import './Info.css'

export const Info = () => {
  const [hide1, setHide1] = useState("hide")
  const handleHide = () => hide1 === "" ? setHide1("hide") : setHide1("")

  return (
    <div className="info">
      <div className={`icon`} onClick={handleHide}>?</div>
      
      <div className={`${hide1} modal main-component`}>
        <div className="button-container">
          <button onClick={handleHide}>X</button>
        </div>
        <ul>
          <li>If you enjoy this app, please <a href="https://github.com/danifromecuador/plannywise" target='blank'>give it a ⭐</a></li>
          <li>If you&apos;re not hearing the alarm sound, please check out <a href="https://github.com/danifromecuador/plannywise/issues/8" target='blank'>this issue</a></li>
          <li>If you&apos;d like to provide feedback, report issues, or suggest improvements, <a href="https://github.com/danifromecuador/plannywise/issues" target='blank'>click here</a></li>
        </ul>
      </div>
    </div>
  )
}