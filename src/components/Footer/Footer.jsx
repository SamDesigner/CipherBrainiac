import React from 'react'
import {useState , useEffect} from 'react'
const Footer = () => {
  const [currentDate , setCurrentDate] = useState("")
  useEffect(()=>{
    const today = new Date();
    const year = today.getFullYear();
    setCurrentDate(year.toString())
  },[])

  return (

    <footer className='bg-specialBrown'>
        <div className='px-[16px] lg:px-[80px] max-w-[1440px] mx-auto py-[80px] flex flex-col gap-[15px]'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div>
                    <h1 className='text-[50px] font-[700]'>C<span className='text-red-600'>I</span>B</h1>
                </div>
                <div className="flex flex-col text-center md:text-left md:flex-row gap-[20px] text-[20px]">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Testimonial</a>
                    <a href='#'>Courses</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
            <p className='text-center md:text-left'>Copyright &copy; 2024, All rights reserved </p>


        </div>
    </footer>
  )
}

export default Footer