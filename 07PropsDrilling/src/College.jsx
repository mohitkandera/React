import React from 'react'

function College(props) {
  return (
    
    <div>
        <hr />
        <h1>College Component</h1>
       <br />
        <h1>CollegeName = {props.student.collegeName}</h1>
        <h1>CollegeLocation = {props.student.collegeLocation}</h1>
        <h1>CollegeCourse = {props.student.collegeCourse}</h1>
    </div>
    
  )
}

export default College