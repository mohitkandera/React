import React, { useContext } from 'react'
import Subject from './Subject'

function Student() {
  return (
    <div style={{backgroundColor:'yellow' , padding : 20}}>
       <h1> Student Component</h1>
       <Subject/>
        </div>
  )
}

export default Student