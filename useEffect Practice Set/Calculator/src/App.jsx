import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    if (input) {
      try {
        setResult(input); // Use eval to evaluate the input as JavaScript expression
      } catch (error) {
        setResult('Error');
      }
    } else {
      setResult(null); // Reset result if no input
    }
  }, [input]); // Re-run whenever 'input' changes


  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear=()=>{
    setInput("")
    setResult("")
  }

  const handleEqual = () => {
    try {
      setResult(eval(input)); // Evaluate the input as a JavaScript expression
    } catch (error) {
      setResult('Error'); // Show error if the expression is invalid
    }
  };

  return (
    <>
      <div className="container">
        <h1>Calculator</h1>
        <div className="inner-container bg-gray-700">
          <div className="input-field my-2">
            <input type="text" 
            readOnly
            value={input}
             className='py-2 px-5' />
          </div>
          <div className="button">
            
            <div className="1strow">

              <button onClick={handleClear} className='bg-orange-400 '>AC</button>
              <button className='bg-orange-400'>Del</button>
              <button onClick={()=>handleClick("%")} className='bg-orange-400'>%</button>
              <button onClick={()=>handleClick("*")} className='bg-orange-400'>*</button>
            </div>
            <div className="2nd-row">

              <button onClick={()=>handleClick("7")}>7</button>
              <button onClick={()=>handleClick("8")}>8</button>
              <button onClick={()=> handleClick("9")}>9</button>
              <button onClick={()=>handleClick("+")} className='bg-orange-400 '>+</button>
            </div>
            <div className="3rd">

              <button onClick={()=>handleClick("6")}>6</button>
              <button onClick={()=>handleClick("5")}>5</button>
              <button onClick={()=>handleClick("4")}>4</button>
              <button onClick={()=>handleClick("-")} className='bg-orange-400 '>-</button>
            </div>
            <div className="4th">

              <button onClick={()=>handleClick("3")}>3</button>
              <button onClick={()=>handleClick("2")}>2</button>
              <button onClick={()=>handleClick("1")}>1</button>
              <button onClick={()=>handleClick("/")} className='bg-orange-400 '>/</button>
            </div>
            <div className="5th">

              <button onClick={()=>handleClick("0")}>0</button>
              <button onClick={()=>handleClick("00")}>00</button>
              <button onClick={()=>handleClick(".")}>.</button>
              <button onClick={handleEqual} className='bg-orange-400 '>=</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
