import React, { useContext } from 'react'
import { Creatingcontext } from './Context'

const Counter = () => {
   const{setcount,count}= useContext(Creatingcontext)
  return (
    <div className='bg-black text-white'>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>{
            setcount(count-1)
        }}>decrement</button>
      
    </div>
  )
}

export default Counter
