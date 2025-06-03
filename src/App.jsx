import { useState } from 'react'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }
  const subValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React learn by Me Today</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={subValue}>remove  value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
