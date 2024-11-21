import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(32)

  const handleChangeCel = (e) => {
    const newCelsius = parseFloat(e.target.value);
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9 / 5) + 32);


  }
  const handleChangeFar = (e) => {
    const newFahrenheit = parseFloat(e.target.value);
    setFahrenheit(newFahrenheit);
    setCelsius((newFahrenheit - 32) * 5 / 9)

  }
  const backgroundImage = () => {
    if (celsius > 26) {
      return 'url("/images/hot-background.jpg")'
    } else if (celsius > 0 && celsius <=26) {
      return 'url("/images/normal-background.jpg")';
    }
    else {
      return 'url("/images/cool-background.jpg")'
    }

  }


  return (
    <>
    


        <div className="container" style={{ backgroundImage: backgroundImage() }}>
          <h1>Temperature Converter</h1>
          <hr />
          <fieldset >
            <div className="inner-container">
              <div className="celcius">
                <h4>Celsius</h4>
                <input type="range" min="-20" max="50" onChange={handleChangeCel} value={celsius} />
                <input type="number" value={celsius} onChange={handleChangeCel} />
              </div>
              <div className="farhaneiht">
                <h4>Farhenheit</h4>

                <input type="range" min="32" max="122" onChange={handleChangeFar} value={fahrenheit} />
                <input type="number" value={fahrenheit} onChange={handleChangeFar} />
              </div>
            </div>
          </fieldset>
        </div>
    
    </>
  )
}

export default App
