import React from 'react'
import Counter from './components/Counter'

const App = () => {
  
  return (
    <div className='bg-gray-800 w-full min-h-screen flex flex-wrap justify-center items-start p-6'>
      <Counter cardName  = 'Likes' />
      <Counter cardName ='Followers'/>
      <Counter cardName ='Views'/>
    </div>
  )
}

export default App
