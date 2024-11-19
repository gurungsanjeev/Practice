import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [mode, setMode] = useState('white')

const handleChangeMode =()=>{
  setMode(mode=="white"?"dark":"white")
  document.body.style.backgroundColor =mode==="white"?"dark":"white"
}
  return (
    <>
    <div className='theme' style={{ backgroundColor : mode?"dark":"white"}}>
      <button onClick={handleChangeMode}>Enable Dark Mode</button>
      <p>Hello is the example of the dark mode</p>
      </div>
    </>
  )
}

export default App
