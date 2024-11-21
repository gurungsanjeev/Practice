import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [value, setValue] = useState(0)
 
 

 const handleIncrement = ()=>{
  setValue(value + 1);
 }
 const handleDecrement = ()=>{
  setValue(value - 1);
 }
 const handleReset=()=>{
  setValue(0);
  alert("Your data was reset")
 }


 

  return (
    <>
    <h1>{value}</h1>
     <div className="container">
      <div className="button">
        <button className='increment' onClick={handleIncrement}>Increment</button>
      </div>
      <div className="button2">
        <button onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      <div className="reset-btn">
        <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
     </div>
    </>
  )
}

export default App
