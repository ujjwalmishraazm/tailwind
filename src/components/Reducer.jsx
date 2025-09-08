import React, { useReducer } from 'react'
 const reducer = (state,action)=>{
    console.log(state);
    console.log(action);
    
    
        if (action.type ==="increment" ) {
          return  state +1;
            
        } else{
         return state -1
        }
    }
const Reducer = () => {
      const [count,dispatch]=useReducer(reducer,0)

   
  
  return (
    <div className=' h-screen bg-black'>
        <div className='flex justify-center items-center mx-auto text-white flex-col gap-4'>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}> decrement</button>
        </div>
      
    </div>
  )
}
export default Reducer
