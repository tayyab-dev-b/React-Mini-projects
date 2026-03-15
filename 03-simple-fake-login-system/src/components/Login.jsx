import React, { useContext, useState } from 'react'
import { AuthContext } from '../assets/context/AuthContextProvider'


const Login = () => {
    const {setIsLoggedIn} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function hadleForm(e){
        e.preventDefault(e);
        setEmail('')
        setPassword('')


        if(email === 'tayyabkhan09@gmail.com' && password === 'developer'){
            setIsLoggedIn(true)
        }else{
            alert('invalid credentials');
        }
    }


   
    
  return (
    <div className='flex justify-center items-center bg-black h-screen w-full '>
      <form onSubmit={hadleForm} action="" className='bg-gray-800 m-10 rounded'>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-amber-200 flex justify-center items-center rounded p-4 font-bold text-2xl font-sans text-black border m-10' type="email" placeholder='enter email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-amber-200 flex justify-center items-center rounded p-4 font-bold text-2xl font-sans text-black border m-10' type="password" placeholder='enter password' />
        <button className='bg-amber-200 w-87 cursor-pointer flex justify-center items-center rounded p-4 font-bold text-2xl font-sans text-black border m-10'>login</button>
      </form>
    </div>
  )
}

export default Login
