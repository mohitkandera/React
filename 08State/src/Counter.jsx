import { useState } from "react";


function Counter(){

    const [count , setCount] = useState("0")
  
    const HandleIncrementChange =() =>{
       setCount(count + 1)
    }
    const HandleDecrementChange = () => {
       setCount(count - 1)
    }

 return(
    <div>
    <h1>Counter : {count} </h1>
    <button onClick={HandleIncrementChange}> Increment</button>
    <button onClick={HandleDecrementChange}> Decrement</button>
    </div>
 )
}
export default Counter;