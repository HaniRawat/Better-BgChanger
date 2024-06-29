import { useState } from 'react'

function App() {
  const [color, setColor] = useState('Orange')


  return (
    <>
    <div className='w-screen h-screen flex flex-wrap justify-center items-center' style= {{backgroundColor : color}}>
    
      <button className='my-3 mx-3 bg-red-900 text-white drop-shadow-lg hover:border-black' onClick={()=>setColor("red")}> Red </button>

      <button className='my-3 mx-3 bg-green-700 text-white drop-shadow-lg ' onClick={()=>setColor("green")}> Green </button>

      <button className='my-3 mx-3 bg-blue-800 text-white drop-shadow-lg' onClick={()=>setColor("blue")}> Blue </button>
      
      </div>
      

    </>
  )
}

export default App
