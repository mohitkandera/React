import React ,{createContext} from 'react'



 export const LoginContext = React.createContext()

const LoginContextProvider = ({children}) => {
    
    const [userDetails , setUserDetails] = useState()

  return (
    <LoginContext.Provider value = {userDetails}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider