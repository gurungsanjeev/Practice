import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [likeCount, setLikeCount] = useState(0)
const [disLikeCount, setDisLikeCount] = useState(0)

const handleLikeCount =()=>{
  setLikeCount(likeCount + 1);
}
const handleDisLikeCount =()=>{
  setDisLikeCount(disLikeCount + 1);
}


  return (
    <>
      <div className="container">
        <div className="like-counter">
          <button onClick={handleLikeCount}>Like Count{likeCount}</button>
        </div>
        <div className="dislike-counter">
          <button onClick={handleDisLikeCount}>Dis-Like{disLikeCount}</button>
        </div>
      </div>
    </>
  )
}

export default App
