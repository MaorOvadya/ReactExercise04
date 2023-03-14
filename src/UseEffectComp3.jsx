import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const URL = "https://api.github.com/users/andasan"

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setUser(result))
      .catch(err => console.log(err))

  }, [])

  useEffect(() => console.log(user), [user])

  return (
    <>
      <h2>{user?.name}</h2>
      <p>{user?.bio}</p>
      <img src={user?.avatar_url} alt={user?.name} width="100" />
    </>
  )
}

export default App