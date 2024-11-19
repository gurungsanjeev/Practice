import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
   <div>Count : {count}</div>
  <button onClick={()=> setCount(count + 1)}>Add</button>
   <button onClick={()=> setCount(count -1)}>Sub</button>
    </>
  )
}

export default App
