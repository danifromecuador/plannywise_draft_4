import './Tracker.css'

export const Tracker = () => {
  return (
    <div className='Tracker main-component'>
      <div className="header">
        <div className={`header-left ${todosSize === 0 ? "hide" : ""}`}>Completed: <span className='completed'>{completed}%</span></div>
        <div className='header-center' onClick={() => { hide1 === "" ? setHide1("hide") : setHide1("") }}>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</div>
        <div className="header-right"></div>
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
          className='button'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => handleEnter(e)}
        />
      </div>
    </div>
  )
}