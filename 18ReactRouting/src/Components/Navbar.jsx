import React from 'react'
import Home from './Home.jsx'
import Logo from '/src/assets/image3.png'

function Navbar() {
  return (
    <div>
    <nav className='container' class=" flex bg-auto justify-between bg-slate-950 text-white h-20 center p-4">
      <div class="flex gap-2">
    <img src={Logo} alt="" class="h-15 animate-bounce  border-indigo-500 rounded-md"/>
    <h1 class="text-5xl h-10 animate-bounce text-cyan-600 border-indigo-500 rounded-md">React</h1>
    </div>
        <li class="text-3xl font-bold flex gap-30.5 p-4">
            <ul><a href="/">Home</a></ul>
            <ul><a href="/About">About</a></ul>
            <ul><a href="/ContactUs">ContactUs</a></ul>
        </li>
      
    </nav>
    </div>
  )
}

export default Navbar