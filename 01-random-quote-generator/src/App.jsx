import { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
    const [quote, setQuote] = useState(null);

    async function GenerateQuote() {
        try {

            const response = await axios.get('https://dummyjson.com/quotes/random');
            setQuote(response.data);
            
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
        
    }

    useEffect(() => {
        GenerateQuote();
        
    },[])

  return (
    <div className='bg-black text-white h-screen'>
      {/* Random Quote Generator */}
      <button onClick={GenerateQuote} className='m-4 mt-4 active:bg-green-800 active:scale-95 bg-green-700 p-5 text-white rounded font-bold'>Generate Quote</button>
      {quote && (
        <div className='m-4'>
          <p className='text-lg font-semibold'>"{quote.quote}"</p>
          <p className='mt-2'>- {quote.author}</p>
        </div>
      )}
    </div>
  )
}

export default App
