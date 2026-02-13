import React, { useState , useRef} from 'react'
import './App.css'

function App() {
  const [time , setTime] = useState( 0 )

  let timerRef = useRef(null)

  function handleStart(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    },1000);
  }

  function handleStop(){
    clearInterval(timerRef.current)
    timerRef.current = null;
  }
  function handleReset(){
    handleStop();
    setTime(0);
  }


  return (
    <>
     <h1>StopWatch :  {time}  Seconds</h1>
     <button onClick={handleStart}>Start</button><br /><br />

     <button onClick={handleStop}>Stop</button><br /><br />

     <button onClick={handleReset}>Reset</button><br />
    </>
  )
}

export default App
