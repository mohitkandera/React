import React, { useEffect, useState } from 'react'

function UseEffect() {
const [counter , setCounter] = useState(0)
const [data , setData] = useState(0)

useEffect(() => {
        // callOnce();
counterFunction();
},[counter])

// function callOnce(){
//     console.log("callonce function called")
// }
function counterFunction(){
    console.log("counter running" , counter)
}



/*

useEffect(() => {
    //call every time
})
useEffect(() => {
    //call only once
},[])
useEffect(() => {
    //call on changing single state
},[state 1])
useEffect(() => {
    //call on changing both state
},[state1, state2])
useEffect(() => {
    //call on changing props 
},[props1, props2])

*/


  return (
    <div>
        <h1>UseEffect Hook</h1>
        <button onClick={() => setCounter(counter+1)}>Counter : {counter}</button>
        <button onClick={() => setData(data+1)}>Data : {data}</button>
    </div>
  )
}

export default UseEffect