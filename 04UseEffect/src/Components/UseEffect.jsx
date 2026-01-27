import React, { useState, useEffect } from 'react'


function UseEffect() {
     const [count, setCount] = useState(0)
    
      const handleClick = () => {
        setCount(count + 1)
      }

      useEffect(() => {
        document.title = `Count is ${count}`
      });

  return (
      <div>
      <h1>{count} was Changed</h1>
      <button onClick={handleClick}>Increment</button>
      </div>
  )
}

export default UseEffect