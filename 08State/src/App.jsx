import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Toggle from './Toggle'

function App() {

  const [fruit , setfruit] = useState("apple")
 

  const Handlechange = () => {
   setfruit("banana")
  }

  return (
    <>
      <h1>React state</h1>
      <h2>{fruit}</h2>
      <button onClick={Handlechange}>Chnnge fruit name : </button>
      <Counter/>
      <Toggle/>
    </>
  )
}

export default App
