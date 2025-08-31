import React from 'react'
import "./Navbar.css"
const Navbarcss = () => {
    const links =[
        {
            title:"guide",
            path:'#'
        },
        {
            title:"pricing",
            path:"#"
        },
        {
            title:"login",
            path:"#"
        }
    ]
  return (
    <div className='navbar-root'>
        <div className='logo'>
         fintech
        </div>
        <div className='links'>
            {
             links.map((item,index)=> <a className='anchor' key={item.title} href={item.path}> {item.title}</a>)
            }
                    <div className='btn'>  start free</div>
        </div>

    </div>
  )
}

export default Navbarcss 
