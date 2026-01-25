import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const alertMsg =() => {
    alert ("button clicked")
  }
  const handleMouse = () => {
    console.log("mouse over event triggered")
  }
  function handleChange(e){
    console.log("value till now  is ", e.target.value)
  }

 const handleSubmit = () => {
    console.log("Form Submitted")
    alert ("form submitted")

 }

  return (
    <>
    <h1>Event Handling</h1>
    <p onMouseOver={handleMouse}>I am a Para</p>
    <button onClick={alertMsg}>ALERT</button>

<hr />
<br />
  <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleChange} />
      <button >submit</button>
  </form> 
    </>
  )
}

export default App
