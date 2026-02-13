import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn , setshowbtn] = useState(false);

  const [todos ] = useState([
    {
      id:1,
      title:"Hey",
       desc: "I am a good todo"
    },
    {
      id:2,
      title:"Hey Another Todo", 
      desc: "I am a good todo too"
    },

    {
      id:3,
      title:"Hey I am a grocery Toso",
       desc: "I am a good todo but I am a grocery todo"
    },
  ]);

  const Todo =({todo}) => {
    return(
      <>
      <div className='todo'>{todo.title}</div>
      <div className='todo'>{todo.desc}</div>
      <div></div>
      </>
    )
  }

  return (
    <>
    
      <h1>Vite + React</h1>
      <div className="card">


      { todos.map(todo=>{
        return  <Todo key={todo.id} todo= {todo}/>
      })

      }
        {/* conditional rendering */}
        {/* {showbtn?<button >I will be shown only when second button is clicked</button>: ""} */}
        {showbtn && <button >Show btn is True</button>}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Enable/disable</button>
      </div>
       
      </div>
     
    </>
  )
}

export default App
