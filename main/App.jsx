import { Store } from '../src/store/store'
import { Alarm } from '../src/alarm/Alarm'
import { Todo } from '../src/todo/Todo'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Alarm />
      <div className="Todo">
        <Todo type="daily" storeLocal={Store().todo.daily}/>
        <Todo type="weekly" storeLocal={Store().todo.weekly} />
        <Todo type="monthly" storeLocal={Store().todo.monthly} />
      </div>
    </div>
  )
}
