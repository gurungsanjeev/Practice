import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [mode, setMode] = useState("white")

const handleChangeMode =()=>{
  if(mode == "white"){
   setMode("Dark");
  document.body.style.backgroundColor="black"
  document.body.style.color="white"
  }
  else{
    setMode("white");
    document.body.style.backgroundColor="white"
  document.body.style.color="black"

  }
}
  return (
    <>
    <div className='theme' style={{ backgroundColor : mode?"dark":"white"}}>
      <button onClick={handleChangeMode}>{(mode=="white"?"Enable Dark Mode":"Enable Light Mode")}</button>
      <p>Hello is the example of the dark mode</p>
      </div>
    </>
  )
}

export default App
