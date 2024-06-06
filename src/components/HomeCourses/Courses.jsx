import React from 'react'
import AdvancedFE from '../../assets/images/AdvancedFE.png'
import BeginnerFE from '../../assets/images/BeginnerFE.png'
import ProjectMg from '../../assets/images/projectManagement.jpg'
import FigmaPoster from '../../assets/images/figmaPoster.png'
import LinkedIn from '../../assets/images/linkedIn.jpg'
import Analytics from '../../assets/images/analytics.png'
import JavaScript from '../../assets/images/JS.jpg'
import {Link} from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
const Courses = () => {
  return (
    <div className='overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        <div 
        data-aos="flip-up"
        className='shadow-lg'>
            <div className='h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]'>
                <img className='h-full w-full object-cover rounded-tl-[20px] rounded-tr-[20px]' src={BeginnerFE} />
            </div>
            <div className='p-[20px]'>
                <h1 className='text-[20px] font-[500] gradient_text'>Junior FrontEnd Development</h1>
                <p>Level: <span>Beginner</span></p>
                <p>Duration: <span>3 months</span></p>
            </div>
            <div className='p-[20px]'>
                <Link to='/projectmanagement' className='special_bg py-2 px-3 rounded-full'>view more</Link>
            </div>
        </div>
        <div 
        data-aos="flip-up"
        className='shadow-2xl'>
            <div className='h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]'>
                <img className='h-full w-full object-cover rounded-tl-[20px] rounded-tr-[20px]' src={AdvancedFE} />
            </div>
            <div className='p-[20px]'>
                <h1 className='text-[20px] font-[500] gradient_text'>Advanced FrontEnd Development</h1>
                <p>Level: <span>Advanced</span></p>
                <p>Duration: <span>3 months</span></p>
            </div>
            <div className='p-[20px]'>
                <Link to='/projectmanagement' className='special_bg py-2 px-3 rounded-full'>view more</Link>
            </div>
        </div>
        <div 
        data-aos="flip-up"
        className='shadow-2xl'>
            <div className='h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]'>
                <img className='h-full w-full object-cover rounded-tl-[20px] rounded-tr-[20px]' src={ProjectMg} />
            </div>
            <div className='p-[20px]'>
                <h1 className='text-[20px] font-[500] gradient_text'>Project Management</h1>
                <p>Level: <span>Beginner</span></p>
                <p>Duration: <span>2 months</span></p>
            </div>
            <div className='p-[20px]'>
                <Link to='/projectmanagement' className='special_bg py-2 px-3 rounded-full'>view more</Link>
            </div>
        </div>
        <div 
        data-aos="flip-up"
        className='shadow-2xl'>
            <div className='h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]'>
                <img className='h-full w-full object-cover rounded-tl-[20px] rounded-tr-[20px]' src={FigmaPoster} />
            </div>
            <div className='p-[20px]'>
                <h1 className='text-[20px] font-[500] gradient_text'>UI/UX Design (Mobile and Web Applications)</h1>
                <p>Level: <span>Beginner</span></p>
                <p>Duration: <span>3 months</span></p>
            </div>
            <div className='p-[20px]'>
                <Link to='/design' className='special_bg py-2 px-3 rounded-full'>view more</Link>
            </div>
        </div>
        <div 
        data-aos="flip-up"
        className='shadow-2xl flex flex-col'>
            <div className='h-[250px] flex-3 w-full rounded-tl-[20px] rounded-tr-[20px]'>
                <img className='h-full w-full object-cover rounded-tl-[20px] rounded-tr-[20px]' src={Analytics} />
            </div>
            <div className='flex flex-1 flex-col justify-between '>
                <div className='p-[20px]'>
                    <h1 className='text-[20px] font-[500] gradient_text'>Introduction To Data Analysis</h1>
                    <p>Level: <span>Beginner</span></p>
                    <p>Duration: <span>3 months</span></p>
                </div>
                <div className='p-[20px]'>
                    <Link to='/projectmanagement' className='special_bg py-2 px-3 rounded-full'>view more</Link>
                </div>
            </div>

        </div>
        <div 
        data-aos="flip-up"
        className='shadow-2xl rounded-tr-[20px] rounded-tl-[20px]  flex flex-col gap-[15px] items-center justify-center cursor-pointer bg-blue-100 text-blue-300'>
            <div className='text-[140px] '>
              <FaCirclePlus />
            </div>
            <h3 className='text-[20px]'>View more</h3>
        </div>
    </div>

  )
}

export default Courses