import React from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'
import { useContext } from 'react'
const Button1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>I am a button </button>
    </div>
  )
}

export default Button1
