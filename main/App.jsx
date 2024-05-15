import { Store } from '../src/store/store'
import { Alarm } from '../src/alarm/Alarm'
import { Todo } from '../src/todo/Todo'
import { Tracker } from '../src/tracker/Tracker'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Alarm />
      <div className='left-right'>
        <div className="left">
          <Todo type="daily" storeLocal={Store().daily} />
          <Todo type="weekly" storeLocal={Store().weekly} />
          <Todo type="monthly" storeLocal={Store().monthly} />
        </div>
        <div className='right'>
          <Tracker />
        </div>
      </div>
    </div>
  )
}
