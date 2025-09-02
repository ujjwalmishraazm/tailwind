import { Menu } from 'lucide-react'
import { useState } from 'react'


const NavbarResponsive = () => {
    const[isOpen, setIsOpen] = useState(false)
    const links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'About',
            url: '/about'
        },
        {
            text: 'Services',
            url: '/services'
        },
        {
            text: 'Contact',
            url: '/contact'
        }
    ]
  return (
    <div className='relative h-screen'>
    <div className='flex bg-gray-400 w-[80%] rounded-2xl shadow-accent h-15 mx-auto mt-3 justify-between'>
        <div className='px-8 py-5 text-bold '>Logo</div>
        <div className=' hidden md:flex justify-center items-center'>
                  {
            links.map((link) => (
                <div key={link.url} className='px-4 py-2'>
                    <a href={link.url} className='text-gray-800 hover:text-gray-600'>{link.text}</a>
                </div>
            ))
        }
        </div>
       
       <button className='p-2 mx-3 md:hidden' onClick={()=>setIsOpen(!isOpen)}><Menu/></button>
       {
        isOpen &&(
            <div className=' absolute top-20 bg-white rounded-2xl inset-x-0 md:hidden'>
             <div className=' sm:hidden flex justify-center items-center flex-col'>
                  {
            links.map((link) => (
                <div key={link.url} className='px-4 py-2'>
                    <a href={link.url} className='text-gray-800 hover:text-gray-600'>{link.text}</a>
                </div>
            ))
        }
        </div>
        </div>
        )
       }
    </div>
    </div>
  )
}

export default NavbarResponsive
