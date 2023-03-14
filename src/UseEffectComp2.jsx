import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY })
  }

  return(
    <>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </>
  )
}

export default App