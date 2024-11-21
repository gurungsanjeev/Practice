import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {

    async function getData() {
      try {

        let x = await fetch('https://jsonplaceholder.typicode.com/photos')
        let data = await x.json();
        setUsers(data)
      }
      catch (err) {
        alert("error aayo hai kta ho fetching ma problem")
      }
    }
    getData();
  }, []);


  return (
    <>
      <div className="App">
        <h1>User List</h1>
        {users.slice(0,10).map((user) => (
          <>
          <div className="card">
            <div className="img">
             <a href={user.url}><img src={user.thumbnailUrl} alt="" /></a>
             <p>{user.title}</p>
            </div>
          </div>
          
          </>
        ))}
      </div>


    </>
  )
}

export default App
