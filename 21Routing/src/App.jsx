import { useState } from 'react'
import './App.css'
import Navabar from './Components/Navabar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Profile from './Components/Profile'


function App() {
   const router = createBrowserRouter([
          {
            path:"/",
            element:  <><Navabar/><Home/></>
          },
          {      
            path:"/about",
            element:  <><Navabar/><About/></>
          },
          {      
            path:"/Contact",
            element:   <><Navabar/><Contact/></>
          },
          {      
            path:"/Profile",
            element:   <><Navabar/><Profile/></>
          }
      ])

  return (
    <>
   
    <RouterProvider router = {router}/> 
    </>
  )
}

export default App
