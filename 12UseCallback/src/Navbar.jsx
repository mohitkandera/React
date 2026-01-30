import React from 'react'
import { memo } from 'react'

function Navbar({adjactive , getAdjective}) {
    console.log("Navbar rendered")
  return (
    <div style={{color:'red'}}>
        <h1>I am a {adjactive} Navbar</h1>
        <button onClick={() => {getAdjective()}}></button>
    </div>

  )
}

export default memo(Navbar)


//  memo is used to prevent unnecessary re-renders of functional components
// memo stop the rendering 