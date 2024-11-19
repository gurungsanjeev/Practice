import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [visible, setVisible] = useState(true)
const handleToggle =()=>{
  setVisible(visible===""?"hello i am visible":"")
}
  return (
    <>
    
    <button onClick={handleToggle}>Toggle div</button>
    <div className="toggle">
    <p>{visible}</p>
    </div>
    </>
  )
}

export default App
