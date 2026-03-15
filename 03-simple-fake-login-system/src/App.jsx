import React, { useContext } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { AuthContext } from './assets/context/AuthContextProvider'


const App = () => {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <div className=''>
      {isLoggedIn ? <Dashboard/> : <Login/>}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      
    </div>
  )
}

export default App
