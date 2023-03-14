import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const URL = "https://api.github.com/users/"

  const [user, setUser] = useState(null)
  const [username, setUsername] = useState()
  const searchInputRef = useRef()

  useEffect(() => {

    async function fetchData(){
      console.log(user, username)
      const response = await fetch(URL + username)
      const result = await response.json()
      setUser(result)
    }

    fetchData()

    // fetch(URL + username)
    //   .then(response => response.json())
    //   .then(result => setUser(result))
    //   .catch(err => console.log(err))

  }, [username])


  return (
    <>
      <input type="text" ref={searchInputRef} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
      <h2>{user?.name}</h2>
      <p>{user?.bio}</p>
      <img src={user?.avatar_url} alt={user?.name} width="100" />
    </>
  )
}

export default App