import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="display">
      <p>I have clicked the button {count} Times....</p>
    </div>
      <button onClick={()=>{setCount(count + 1)}}>Click me</button>
    </>
  )
}

export default App
