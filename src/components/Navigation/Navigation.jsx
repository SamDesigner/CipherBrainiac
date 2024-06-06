import React from 'react'
import './Navigation.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Navigation = () => {
  const [isOpen , setIsOpen] = useState(false)
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <header className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px]'>
        <nav className='flex justify-between items-center py-[10px]'>
            <div className='text-[40px]'>
                <h1 className='font-bold'>C<span className='text-red-700'>I</span>B</h1>
            </div>
            <ul className='hidden lg:flex items-center gap-[22px] text-[18px]'>
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Testimonial</li>
                <li>Classroom</li>
                <li className='special_bg py-2 px-7 rounded-3xl'>Contact</li>
            </ul>

            <div className='lg:hidden text-[30px]' onClick={toggleMenu}>
              {
                isOpen ? <ImCancelCircle /> : <GiHamburgerMenu />   
              }
            </div>
        </nav>
        {/* <motion.div
            initial={{opacity:0, y: -50 }}
            animate={{opacity:1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul className='flex flex-col text-black items-center gap-[22px] text-[18px]'>
                <li>Home</li>
                <li>About</li>
                <li>Testimonial</li>
                <li>Classroom</li>
                <li className='special_bg py-2 px-7 rounded-3xl'>Contact</li>
            </ul>  
        </motion.div> */}
    </header>

  )
}

export default Navigation