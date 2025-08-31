

const Hero2 = () => {
  return (
    <div className='h-screen bg-black'>
     <div className='flex  justify-center flex-col pt-25 max-w-[500px] mx-auto tracking-tight'>
         <h1 className=' text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 '>Unleash the power of intuitive finance</h1>
         <p className="text-gray-400 mt-6 text-xl">In today's fast-paced financial landscape, <span style={{ color: "var(--uu)" }}>understand</span> key concepts like budgeting, investing, and cash flow <span className="uuu">management</span> is essential for achieving financial stability and growth.  </p>
         <div className="mt-8 flex justify-center">
           <button className="items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg">Get Started</button>
         </div>
         </div>


    </div>
  )
}

export default Hero2
