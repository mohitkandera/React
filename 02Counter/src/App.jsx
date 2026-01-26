import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const HandleClickIncrement = () => {
  setCount(count+1)
}
const HandleClickDecrement =() => {
  setCount(count- 1)
}
  
  return (
    <>
    <div>
      <h1>Chai aur React </h1>
      <h2>Counter values : {count}</h2>
      <button onClick={HandleClickIncrement}>Increment</button>
      <button onClick={HandleClickDecrement}>Decrement</button>
  </div>

  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus a, error ratione doloremque fugiat aliquam cupiditate odit, rerum delectus modi hic, natus quod? Unde est optio possimus! Temporibus, dolores!</h1>



 
  </>
  )
}

export default App
