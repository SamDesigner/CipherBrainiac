import React from 'react'
import './CourseInfo.css'
import { FaHandPointRight } from "react-icons/fa6";
import bode from '../../assets/images/bode.jpg'
const UXDesign = () => {
  return (
    <div className='bg-white px-[16px] lg:px-[80px] md:py-[100px]'>
        <div className='max-w-[1440px] mx-auto flex flex-col gap-[30px]'>
            <div className='md:py-[40px]'>
                <h1 className='font-[700] text-[30px] text-center md:text-left md:text-[50px]'>Meet Your <span className='text-red-600'>Instructor</span></h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]'>
                <div className='flex-1 flex justify-center '>
                    <div className='h-[300px] w-[300px] lg:h-[600px] lg:w-[500px] bg-black relative '>
                        <img className='h-full w-full object-cover absolute higher_index' src={bode} alt='WebDevelopment Instructor' />
                        <div className='h-full w-full top-[-6%] right-[-6%] bg-red-600 absolute'>

                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-[20px]'>
                    <div>
                        <h1 className='text-black text-[25px]'>What You Will Learn </h1>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>HTML (HyperText Markup Language):</b> Structure of a webpage, tags, attributes, Semantic HTML, forms, tables, multimedia elements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default UXDesign