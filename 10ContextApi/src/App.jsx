import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './College.jsx'
import subjectContext from './context.jsx'

function App() {
  const [subject, setSubject] = useState("Computer")

  return (
    
   <div style={{backgroundColor:'orange', padding:20}}>

   <subjectContext.Provider value={subject}>
    <select onChange={(e) => setSubject(e.target.value)}>
      <option value="">Select Subject</option>
      <option value="Math">Math</option>
      <option value="English">English</option>
      <option value="Computer">Computer</option>
    </select>
  <h1>Univerity Component</h1>
      <College/> 
   </subjectContext.Provider>
   </div>

  
  )
}

export default App
