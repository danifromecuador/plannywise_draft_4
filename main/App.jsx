import { store } from '../src/store/store'
import { Alarm } from '../src/alarm/Alarm'
import './App.css'

export const App = () => {
  const { animalStore } = store()

  return (
    <div className="App">
      <h1>Hello Dani!</h1>
      <p>Bears: {animalStore.bears}</p>
      <button onClick={() => animalStore.addBear()}>Increase bears</button>
      <Alarm />
    </div>
  )
}
