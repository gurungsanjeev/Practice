import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [text, setText] = useState("")

const handleDisplay=(e)=>{
  setText(e.target.value)
}

  return (
    <>
      <form action="">
        <input type="text" onChange={handleDisplay}/>
      </form>

      <div className="text-display">
        <p>Output:</p>
          <div>
          {text}

          </div>
      </div>
    </>
  )
}

export default App
