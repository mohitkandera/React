import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const fetchData = () => fetch('https://dummyjson.com/users').then((res) => res.json())
  const userResource = fetchData();

 export default function App() {
  return(
    <div>
      <h1>User api in react js</h1>
      <Suspense fallback ={<p>Loading....</p>} >
      <users userResource={userResource}/>
      </Suspense>
    </div>
  )
}

const users = ({userResource})=> {

  const userData = use(userResource);
  console.log(userData);
  return(
    <h1>User List</h1>
  )
}
