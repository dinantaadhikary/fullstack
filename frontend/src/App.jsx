import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJoke(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
       home
    </>
  )
}

export default App
