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
                                <b>Wireframing:</b> Sketching basic layouts to plan out the structure and navigation of a design.
                            </p>
                        </div>

                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>User Interface Design:</b> Focusing on creating visually appealing and functional interfaces.Understanding of design patterns and UI components.
                            </p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>User Research:</b>Conducting surveys, interviews, and usability testing.Understanding user personas and journey mapping.
                            </p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>Responsive Design:</b> Designing for various devices and screen sizes.Knowledge of media queries and grid systems.
                            </p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>Typography & Color Theory:</b> Understanding font pairing, readability, and how typography affects design.Using color effectively to evoke emotions and create visual harmony.
                            </p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <div className='text-red-600'>
                                <FaHandPointRight />
                            </div>
                            <p>
                                <b>Layout and Composition:</b> Grasping concepts like grid systems, alignment, spacing, and balance.
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