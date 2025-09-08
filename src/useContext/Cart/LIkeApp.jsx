import React from 'react'
import Cart from './Cart'
import Total from './Total'

const LIkeApp = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Cart items={"mackbook"} price={"2000"}/>
      <Cart items={"phone"} price={'1000'}/>
      <Cart items={"earphone"} price={"300"}/>
      <Total/>
    </div>
  )
}

export default LIkeApp
