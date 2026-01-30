import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Components/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Movies/>
        <h1>Hello axios</h1>
      </div>
    </>
  )
}

export default App
