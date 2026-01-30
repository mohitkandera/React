import React, { useContext } from 'react'
import subjectContext from './context'

function Subject() {
    const subject = useContext(subjectContext)
  return (
    <div  style={{backgroundColor:'pink' ,color:'black', padding : 20}}>
        <h1>Subject is  : {subject}</h1>
    </div>
  )
}

export default Subject