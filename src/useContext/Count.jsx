import React, { useContext } from 'react'
import Counter from './counter'
import { Creatingcontext } from './Context'


const Count = () => {
  const{count}=useContext(Creatingcontext)
  return (
    <div className='text-white bg-black'>
        <h1>count is {count}</h1>
        <Counter/>
        <Counter/>
      
    </div>
  )
}

export default Count
