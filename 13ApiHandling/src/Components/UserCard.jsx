import React from 'react'

function UserCard(props) {
    console.log(props.data)

  return (
    <div className='user-card'>
      <img src="" className='user-image' alt="" />
      <h3>{props.data.name.first}</h3>
      <h3>{props.data.location.city}, {props.data.location.state}</h3>
    </div>
  )
}

export default UserCard