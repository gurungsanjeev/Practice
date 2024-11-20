import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [totalList, setTotalList] = useState(0)
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const addTodo = () => {
    
    setTodo([...todo, text]);
    setTotalList(totalList + 1)
    setText("")
  }


  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <p>Total list added: <span>{totalList}</span></p>
        <div className="inner-container">
          <div className="text-field">
            <input type="text" onChange={handleChange} value={text} />
          </div>
          <div className="button">
            <button onClick={addTodo}>Add</button>
          </div>
        </div>
        <div className="list-todos">
          {todo.map((todo, index) => {

            return (
              
              <li>{todo}</li>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
