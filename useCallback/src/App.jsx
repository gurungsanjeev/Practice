import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adj, setAdj] = useState("good")

  const getAdj = ()=>{
    return "another"
  }

  return (
    <>
    <Navbar adj={"good"} getAdj={getAdj}/>
     
    </>
  )
}

export default App
