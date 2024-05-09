
import { Alarm } from '../src/alarm/Alarm'
import { Todo } from '../src/todo/Todo'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Alarm />
      <Todo />
    </div>
  )
}
