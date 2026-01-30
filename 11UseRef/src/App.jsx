import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

    const inputHandler =()=> {
      inputRef.current.focus();
      console.log(inputRef);
      inputRef.current.style.color = 'red';
    }

    const toggleHandler =() => {
     if( inputRef.current.style.display !='none'){
      inputRef.current.style.display = 'none';
     }else{
      inputRef.current.style.display = 'inline';
     }
    }

    const handleChange =() => {
      h1Ref.current.style.color = 'blue';
    }
  return (
    <>
    <h1>UseRef </h1>


    <input ref={inputRef} type="text" placeholder='Enter your username' />
    <button onClick={toggleHandler}>Toggle</button>
    <button onClick={inputHandler}>Focus on input field</button>
  <hr />
  
    <h1 ref={h1Ref}>color change</h1>
    <button onClick={handleChange}>Change</button>
    </>
  )
}

export default App
