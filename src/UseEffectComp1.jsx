import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [state,setState] = useState(false)
  const [airCon, setAirCon] = useState({
    tempUnit: 'Farenheit',
    temp: 0,
    isOn: false
  })

  //componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    document.title = "Hoge"

    document.title = `Power is ${airCon.isOn ? 'On' : 'Off'}`

    console.log("Updating")

    //on unmount
    return () => {
      console.log("Unmounted")
    }
  }, [airCon]) //dependency array

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
