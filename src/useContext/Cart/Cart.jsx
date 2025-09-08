
import { useContext } from 'react'
import { Creatingcontext } from './contsxt'

const Cart = ({items,price}) => {
 const {value,setvalue} = useContext(Creatingcontext)
  return (
    <div className=' flex flex-col items-center mx-auto gap-4 bg-black '>
        <div>
            <h1>{items}</h1>
            <h5>{price}</h5>
            <button onClick={()=>setvalue([...value,{items,price}])}> add to cart </button>
        </div>
      
    </div>
  )
}

export default Cart 
