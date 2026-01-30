import React, { useState } from 'react'

function Usestate() {
    const [count , setcount] = useState("0")
     console.log(count)
     const [name , setname ] = useState("")


  return (
    <div>
        <h1>Counter = {count}</h1>
        
        <button onClick={() => setcount(count+1)}>Increment</button>
        <button onClick={() => setcount(count-1)}>Decrement</button>

        <input type="text" onChange={(e) => setname(e.target.value)}/>
        <h1>{name}</h1> 
    </div>
  )
}

export default Usestate