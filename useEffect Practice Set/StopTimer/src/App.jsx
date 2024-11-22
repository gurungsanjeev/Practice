import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false)



  useEffect(() => {

    let interval;
    if (isRunning)
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      else{
        clearInterval(interval);
      }
return () =>clearInterval(interval)
  }, [isRunning])

  // Hours calculation
  const hours = Math.floor(timer / 3600);

  // Minutes calculation
  const minutes = Math.floor((timer % 3600) / 60);

  // Seconds calculation
  const seconds = timer % 60;

 




  const handleReset = () => {
    setTimer(0)

  }

const handleStartStop  =()=>{
  setIsRunning((prev) => !prev);
};




  return (
    <>

      <div className="container">
        <h1>Stop Watch</h1>
        <div className="inner-container">
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
          <div className="button">
            <div className="start">
              <button onClick={handleStartStop } >{isRunning?"Stop":"Start"}</button>
            </div>
           
            <div className="reset">
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
