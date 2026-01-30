import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import College from './College.jsx'
import Unversity from './Unveristy.jsx'
import Student from './Student.jsx'

function App() {
 { /*let name = "Mohit kumar";
  let age = 21;
  let email = "Mohit.krishajs874gmail.com" */}
 
  let userobject ={
     name : "mohit",
     age : 21,
     email : "mohitkrishangamil.com"
  }
  let userobject2 ={
     name : "Ravi",
     age : 28,
     email : "Ravikrishangamil.com"
  }
  let userobject3 ={
     name : "Sunny",
     age : 23,
     email : "sunnyyadav.com"
  }

  let college ={
    collegeName : "  Hrit university",
    collegeLocation : "  Ghaziabad",
    collegeCourse : [ "  Btech ,", " Mtech,", " BCA"]
  }
  let university = ["ccsu Univeristy", "Hrit University", "AKTU University"]

  const [student , setstudent] = useState("Kanderaji")
  return (
    <>
      <div>
        <h1>Props in react js</h1>


   {/* <User name={"anil sidhu "} age= {25} email={"anilkumar453@gmail.com"}/> */}
    {/*<User name={"rahul yadav "} age= {22} email={"rahulyadav"}/> */}
       <Unversity name ={university[0]}/>
       <Unversity name ={university[1]}/>
       <Unversity name ={university[2]}/>

       <Student name={student}/>



        <User user={userobject}/>
        <User user={userobject2}/>
        <User user={userobject3}/>

        <College student={college} />

      </div>
    </>
  )
}

export default App
