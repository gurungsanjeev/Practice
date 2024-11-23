import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState('8')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+=[]{}"


    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length) // Generate random index between 0 and str.length-1
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  
  const handleCopy =()=>{
    navigator.clipboard.writeText(password)
    alert("Password Copied")
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="container w-full max-w-md mx-auto shadow rounded-lg px-4 my-8 h-96 text-orange-500 bg-slate-800">


        <h1 className="font-bold">Password Generator</h1>
        <div className="input flex my-5-">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-lg my-5'
            placeholder='Enter your password'
            readOnly />
          <button 
          className='bg-orange-500
           text-white p-2 rounded-lg
            hover:bg-orange-900
             font-bold my-5' onClick={handleCopy}>Copy</button>
        </div>
        <div className='flex-col text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 my-4'>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
        </div>
        <div className='float-left'>
          <input
            type="checkbox"
            checked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
          <label className='mx-2'>Allowed Number</label>
        </div>
        <div className='float-left'>
          <input
            type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
          <label className='mx-2'>Special Character</label>
        </div>
      </div>

    </>
  )
}

export default App
