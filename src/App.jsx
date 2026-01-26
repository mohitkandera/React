import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

<<<<<<< HEAD
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
=======
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
>>>>>>> 112316246dbf208bb80ef2bc63091ccd2b45dd69
  )
}

export default App
