import React from 'react'

function User({user}) {   /* props is used to receive data from parent component */ 
                         /* in place of props you can use only name also */
    console.log(user.name);

  return (
    <div>
      { /* <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.email}</h2> */}
        <hr /> 
        <h2> Name = {user.name}</h2>
        <h2> age = {user.age}</h2>
        <h2> email = {user.email}</h2>
    </div>
  )
}

export default User