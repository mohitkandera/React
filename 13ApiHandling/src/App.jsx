import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getPost, getRandomuser} from './Api/Index.js'
import Postcard from './Components/Postcard.jsx'
import UserCard from './Components/UserCard.jsx'

function App() {
const [data , setData] = useState(null)
const [userData, setUserData] = useState(null)

  useEffect(() => {
    getPost().then((posts) => setData(posts))
  }, [])

  useEffect(() => {
      getRandomuser().then((user) => setUserData(user.results[0]))
  }, []);

  const refresh =() => {
    getRandomuser().then((user) => getUserData(user.results[0]))
  }


  return (
    <>
    <div className='app'>
      <UserCard data={userData}/>
      <button onClick={refresh }>Refresh Data</button>
     {/* {data ? data.map((e) => <li>{e.title}</li>) : <p>No Data</p>}  */}
      {data ? data.map((e) => <Postcard title={e.title} body={e.body} />) : <p>No Data</p>}  
    </div>

    </>
  )
}

export default App
