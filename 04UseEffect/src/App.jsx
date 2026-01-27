import React , { useState, useEffect, useContext } from 'react'
import './App.css'
import { createContext } from 'react'
import UseEffect from './Components/UseEffect'
import UseContext from './Components/UseContext'
import LoginContextProvider from './Context/LoginContextProvider'



 export const LoginContext = React.createContext()
function App(){
  return (

    <LoginContext.Provider >
      <UseContext/>
    </LoginContext.Provider>
  );
}

export default App
