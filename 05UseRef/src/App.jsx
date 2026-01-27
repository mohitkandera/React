import React , {  useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.curent);
    inputEle.current.style.backgroundColor = "red";
    inputEle.current.focus();
  }

  return (
    <>
    <div> 
    <input type="text"  ref={inputEle}/>
   <button onChange={handleClick}>Click Here</button>
    </div>
    </>
  )
}

export default App
