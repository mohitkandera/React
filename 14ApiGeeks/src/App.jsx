import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItem] = useState(0)
  const [dataisLoading , setdataisLoading] = useState(false)

  useEffect(() => {
    fetch ( "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setdataisLoading(true)
      })
  }, [])
  if(!dataisLoading){
    return(
      <div>
      <h1>Please wait data is loading.....</h1>
      </div>
    );
  }

  return (
    <>
    <div className='App'>
  <h1>Geeks for Greeks</h1>
  <h2>Fetch data from an Api .....</h2>
  <div className='container'>
    {items.map((item) => (
      <div className='item' key={item.id}>
        <ol>
          <div>
            <strong>User_ID : </strong>
            {item.id}
          </div>
          <div>
            <strong>user_name : </strong>
            {item.username},
          </div>
          <div>Full_Name : {item.name}</div>
          <div>Full_Email : {item.email}</div>
        </ol>
         </div>
     ))}
    </div>
  </div>
    </>
  )
}

export default App
