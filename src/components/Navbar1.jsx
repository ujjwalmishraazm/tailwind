import React from 'react'

const Navbar1 = () => {
   const links = [
    {
        title:"guide",
        path:"#",
    },
    {
        title:"Pricing",
        path:"#"
    },
    {
        title:"login",
        path:"#"
    }
   ]
  return (
    <div className="flex justify-between align-middle mt-6 items-center ">
        <div className=" font-bold text-2xl mx-10 cursor-pointer  ">
            Fintech
        </div>

        <div className='flex gap-5 mx-20 items-center text-gray-900 text-bold '>
            {
                links.map((item,index)=><a className=' hover:text-gray-400' key={item.title} href={item.path}> {item.title}</a>)
            }
          <div className='bg-blue-400 text-white py-2 px-3 mx-6 rounded-xl shadow-md tracking-wide '> <button>start free</button></div>
        </div>
      
    </div>
  )
}

export default Navbar1
