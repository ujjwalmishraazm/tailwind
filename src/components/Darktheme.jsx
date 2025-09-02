import React from 'react'

const Darktheme = () => {
    const handleClick = () => {
       document.documentElement.classList.contains("dark")? "light":"dark"
       document.documentElement.classList.toggle("dark")
    }
use
  return (
    <div className='h-screen bg-gray-600 dark:bg-background'>
        <div className='flex justify-center flex-col items-center mx-auto h-full '>
            <div className=' relative h-90 w-80 bg-white shadow-md rounded-[20px] flex justify-center items-center gap-5 mask-b-from-1 dark:bg-gray-800 '>
                <div className='bg-blue-300 h-10 w-10 rounded-2xl animate dark:bg-blue-600 '></div>
                <div className='bg-blue-300 h-10 w-10 rounded-2xl animate '></div>
                <div className='bg-blue-300 h-10 w-10 rounded-2xl animate '></div>
            </div>

    <button className='h-8 rounded-[5px] text-white bg-gray-600 mt-4 p-2 py-0.5' onClick={handleClick}> switch me</button>
        </div>
    
      
    </div>
  )
}

export default Darktheme
