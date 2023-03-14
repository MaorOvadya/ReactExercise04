import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [tempUnit, setTempUnit] = useState('Farenheit')
  // const [temp, setTemp] = useState(0)

  const [airCon, setAirCon] = useState({
    tempUnit: 'Farenheit',
    temp: 0,
    isOn: false
  })

  //componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log("Mounted")

    return () => {
      console.log("Unmounted")
    }
  })

  const handleSwitch = () => {
    //state updates are asynchronous
    setAirCon(prevState => ({ ...prevState, isOn: !prevState.isOn }))
  }

  return (
    <div className="App">
      <button onClick={handleSwitch}>Power Switch</button>
      <p>Power is {airCon.isOn ? 'On' : 'Off'}</p>

      <button onClick={() => setAirCon((prevState) => {
        return {
          ...prevState,
          tempUnit: "Celsius"
        }
      })} >Change Unit</button>
      <p>Temperature is in {airCon.tempUnit}</p>

      <input type="number" value={airCon.temp} onChange={(e) => setAirCon((prevState) => ({ ...prevState, temp: e.target.value }))} />
      <p>Temperature: {airCon.temp} degrees {airCon.tempUnit}</p>
    </div>
  )
}

export default App
