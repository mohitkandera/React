import React from 'react'
import { Link } from 'react-router-dom'


const Navabar = () => {
   
  return (
    <>
    <div>
        <nav>
            <Link  className={(e) => {return e.isActive?"red": "" }} to="/"><li>Home</li></Link>
            <Link className={(e) => {return e.isActive?"red": "" }} to="/About"><li>About</li></Link>
            <Link className={(e) => {return e.isActive?"red": "" }}  to="/Contact"><li>Contact</li></Link>
            <Link  className={(e) => {return e.isActive?"red": "" }} to="/Profile"><li>Profile</li></Link>
           </nav>
    </div>
    
    </>
  )
}

export default Navabar