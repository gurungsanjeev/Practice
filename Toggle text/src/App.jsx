import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState("hi")
  const handleToggle = () =>{
    // if(text === "hi"){
    //   settext("goodbye")
    // }
    // else{
    //   settext("hi")

    // }

   settext(text==="hi"?"goodbye":"hi")
  }

  return (
    <>
    <div className="text">

    {text}
    </div>
     <button onClick={handleToggle}>Toggle Text</button>
      
      
    </>
  )
}

export default App
