import React from 'react'
import Board from '../../assets/svg/Courses.svg'
import Courses from './Courses'
const HomeCourses = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] pb-[50px] lg:pb-[100px]'>
        <div className='flex items-center justify-center'>
            <img className='h-[40vh] lg:h-[70vh]' src={Board} />
        </div>
        <div>
            <Courses />
        </div>

    </div>
  )
}

export default HomeCourses