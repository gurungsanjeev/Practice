import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sanjeev")
  const [form, setForm] = useState({ })
 const handleClick = () =>{
  alert("the button was clicked");
 }
 const handleOver = () =>{
  console.log("The mouse was in over the div")
 }

 const handleChange = (e)=>{
setForm({...form, [e.target.name]:e.target.value})
 }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={handleOver}>

      </div>
      <form action="">
      <div className="text">
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required />

        <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
        <input type="text" name='phone' value={form.phone?form.phone:""}  onChange={handleChange} />
        <button type="submit">submit</button>
        
      </div>
      </form>
    </>
  )
}

export default App
