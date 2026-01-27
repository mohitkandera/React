import React, { useContext } from 'react'
import {LoginContext} from '../Context/LoginContextProvider'


function SinglePost() {
    const Login = useContext(LoginContext)
    console.log(Login);
  return (
    <div>
        <h1> USECONTEXT</h1>
    </div>
  )
}

export default SinglePost