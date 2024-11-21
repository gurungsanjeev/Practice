import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [backgroundColor, setBackgroundColor] = useState("")
  const handleColorGreen =()=>{
    let bg = document.body.style.backgroundColor ="green"
    setBackgroundColor(bg)
  }
  const handleColorYellow =()=>{
    let bg = document.body.style.backgroundColor ="yellow"
    setBackgroundColor(bg)
  }
  const handleColorOrange =()=>{
   
    setBackgroundColor(document.body.style.backgroundColor ="orange")
  }

  return (
    <>
      <div>
        <button onClick={handleColorGreen}>green</button>
      </div>
      <br />
      <div>
        <button onClick={handleColorYellow}>yellow</button>
      </div>
      <br />
      <div>
        <button onClick={handleColorOrange}>orange</button>
      </div>
    </>
  )
}

export default App
