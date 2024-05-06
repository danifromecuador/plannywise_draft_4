import { store } from '../src/store/store'
import './App.css'

export const App = () => {
  const { animalStore } = store()

  return (
    <div className="App">
      <h1>Hello Dani!</h1>
      <p>Bears: {animalStore.bears}</p>
      <button onClick={() => animalStore.addBear()}>Increase bears</button>
    </div>
  )
}
