import { useState, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let val = useRef(0);
  let btnRef = useRef("")

const handleIncrementChange =() => {
  val.current = val.current+1
  console.log("value is : ", val.current)
  setCount(count+1);
}
const handleDecrementChange =() => {
  setCount(count-1)
}


// its run on every render 
useEffect(() => {
  console.log("main firse render ho gya hu ...")
})

const changeColor = () =>{
  console.log("....")
    btnRef.current.style.backgroundcolor="red";
}


  return (
    
    <>
  <div>
    <h1>Count is : {count}</h1>
    <button
    ref={btnRef}
     onClick={handleIncrementChange}>
      Increment
      </button>
    <button onClick={handleDecrementChange}>Increment</button>
    <br />
    <br />
    <button onClick={changeColor}>Change the color of 1 button</button>
  </div>
    </>
  )
}

export default App
