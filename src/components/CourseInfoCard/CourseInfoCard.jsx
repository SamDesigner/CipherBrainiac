import React from 'react'

const CourseInfoCard = ({Duration, Platform, Certification}) => {
  return (
    <div className='bg-primaryOrange px-[16px] lg:px-[80px] py-[40px]'>
        <div className='max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-[20px] '>
            <div className='bg-white p-[20px] rounded-2xl'>
                <h3 className='text-center text-red-600'>Duration</h3>
                <h1 className='text-[40px] text-center font-bold'>{Duration}</h1>
            </div>
            <div className='bg-white p-[20px] rounded-2xl'>
                <h3 className='text-center text-red-600'>Platform</h3>
                <h1 className='text-[40px] text-center font-bold'>{Platform}</h1>
            </div>
            <div className='bg-white p-[20px] rounded-2xl'>
                <h3 className='text-center text-red-600'>Certification</h3>
                <h1 className='text-[40px] text-center font-bold'>{Certification}</h1>
            </div>
        </div>
    </div>
  )
}

export default CourseInfoCard