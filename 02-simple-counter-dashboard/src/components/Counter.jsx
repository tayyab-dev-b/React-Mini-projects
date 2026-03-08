import React, { useState } from 'react'

const Counter = (props) => {
  const [likes, setLikes] = useState(0)
  const [dislikeNumbers, setDislikeNumbers] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  function handleDisLike() {
    setDislikeNumbers(dislikeNumbers + 1);
  }

  function handleReset() {
    setLikes(0);
    setDislikeNumbers(0);
  }

  return (
    <div className='m-6'>
      <div className='bg-black h-80 w-90 rounded-2xl flex flex-col items-center justify-between  text-white'>
        <h2 className='font-bold text-5xl mt-10'>{props.cardName}</h2>
        <div className='flex gap-8 mb-5 font-semibold text-lg '>
        <button onClick={handleLike} className='cursor-pointer hover:bg-green-900 rounded bg-green-950 py-1 px-3'>👍 {likes}</button>
        <button onClick={handleDisLike} className='cursor-pointer hover:bg-green-900 rounded bg-green-950 py-1 px-3'>👎 {dislikeNumbers}</button>
        <button onClick={handleReset} className='cursor-pointer hover:bg-green-900 rounded bg-green-950 py-1 px-3'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
