import React, { useContext } from 'react'
import { AuthContext } from '../assets/context/AuthContextProvider'



const Dashboard = () => {
    const {setIsLoggedIn} = useContext(AuthContext);
    const {user} = useContext(AuthContext)
  return (
    <div className='h-screen w-full bg-red-950 text-white'>
      <nav className='flex justify-between p-10 h-30 bg-black '>
        <h1 className='text-2xl font-bold font-sans'>Welcome to DASHBOARD</h1>
        <ul className='flex gap-20 items-center'>
            <h2 className='text-xl font-bold font-sans'>{user}</h2>
            <button onClick={()=> setIsLoggedIn(false)} className='bg-gray-600 px-3 py-2 rounded font-bold'>LogOut </button>
        </ul>
      </nav>
      <h1 className='flex justify-center items-center mt-50 text-3xl '>This is the DASHBOARD,SO wELCOME HERE: IF YOU WANT TO LOGOUT CLICK THE LOGOUT BUTTON </h1>
    </div>
  )
}

export default Dashboard
