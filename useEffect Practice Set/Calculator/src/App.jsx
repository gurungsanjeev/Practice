import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [input, setInput] = useState("")

  useEffect(() => {
    if (input) {
      try {
        setResult(eval(input)); // Use eval to evaluate the input as JavaScript expression
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

  return (
    <>
      <div className="container">
        <h1>Calculator</h1>
        <div className="inner-container bg-gray-700">
          <div className="input-field my-2">
            <input type="text" readOnly className='py-2 px-5' />
          </div>
          <div className="button">
            
            <div className="1strow">

              <button className='bg-orange-400 '>AC</button>
              <button className='bg-orange-400'>Del</button>
              <button className='bg-orange-400'>%</button>
              <button className='bg-orange-400'>*</button>
            </div>
            <div className="2nd-row">

              <button onClick={handleClick("7")}>7</button>
              <button>8</button>
              <button>9</button>
              <button className='bg-orange-400 '>+</button>
            </div>
            <div className="3rd">

              <button>6</button>
              <button>5</button>
              <button>4</button>
              <button className='bg-orange-400 '>-</button>
            </div>
            <div className="4th">

              <button>3</button>
              <button>2</button>
              <button>1</button>
              <button className='bg-orange-400 '>/</button>
            </div>
            <div className="5th">

              <button>0</button>
              <button>00</button>
              <button>.</button>
              <button className='bg-orange-400 '>=</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
