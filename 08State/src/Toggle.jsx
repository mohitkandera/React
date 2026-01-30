import React, { useState } from 'react'

function Toggle() {

    const [display , setdisplay] = useState(true)

  return (
 <>
        <h1>Toggle in react js</h1>
        <button onClick ={() => setdisplay(!display)}>Toggle</button>

       { /*{
            display? <h1>ANIL SIDHU</h1>:null
        }*/}
        {
            display?<user/>:null
        }
   </>
  )
}

export default Toggle