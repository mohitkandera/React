import React , {useState  } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0);
  const [input , setInput] = useState(0)

  function expensiveTask(num){
    console.log("Inside Expensive task ")
    for(let i= 0 ; i<=100000000000; i++){
      return num*2;
    }
  }
  let doubleValue = expensiveTask(input)

  return (
    <>
  <div>
    <button onClick={() => setCount(count+1)}>
      Increment
    </button>
    <div>
      Double : {doubleValue}
    </div>
    <br />
    <input 
    type="number"
    placeholder='enter number'
    value={input}
    onChange={(e) => setInput(e.target.value)} 
    />

    <div>Count: {count}</div>
  </div>

    </>
  )
}

export default App
