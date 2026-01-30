import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './College'
import { SubjectContext } from './Contextdata'
import React from 'react'

function App() {
  const [subject, setsubject] = useState("English")

  return (
    <>
    <div  style={{backgroundColor : "yellow",padding: 20}}>
     <SubjectContext.Provider value={subject}>
      <select value={subject}  onChange = {(e) => setsubject(e.target.value)}>
        <option value="">select subject</option>
        <option value="maths">maths</option>
        <option value="english">english</option>
        <option value="physics">physics</option>
        <option value="chemistry"> chemistry</option>
      </select>
       <h1>Context api </h1>
       <button onClick={() =>setsubject('')}>Clear Subject</button>
       <College/>
     </SubjectContext.Provider>
        
      </div>
     
    </>
  )
}

export default App
