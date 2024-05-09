import { Store } from '../store/store'
import './Todo.css'

export const Todo = ({ type, storeLocal }) => {
  return (
    <div className='Todo'>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h1>
      <ul>
        {storeLocal.todos.map(element => (
        <li key={element}>{element}</li>
        ))}
        {storeLocal.dones.map(element => (
        <li key={element}>{element}</li>
        ))}
      </ul>
      <div>
        <button>Remove All Completed</button>
        <input
          type="text"
          placeholder='Type a new goal and press Enter'
        />
      </div>
    </div>
  )
}