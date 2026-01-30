import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alert from './Components/Alert.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
