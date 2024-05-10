import React from 'react'
import '../HomeStats/HomeStats.css'
import CIB from '../../assets/images/CIB.png'
const HomeStats = () => {
  return (
    <div className='bg-primaryOrange'>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] flex flex-col flex-col-reverse pb-[100px] md:pb-[0px]  md:flex-row  items-center '>
            <div className='flex-1'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                    <div className='bg-white py-[20px] md:rounded-tr-[30px] md:rounded-tl-[30px] md:rounded-br-[30px] px-[30px]'>
                        <h3 className='gradient_text text-[25px] lg:text-[45px] font-bold'>2+ <br></br> years</h3>
                        <p className='text-[15px]'>our services have proven to be reliable</p>
                    </div>
                    <div className='bg-white py-[20px] md:rounded-tr-[30px] md:rounded-tl-[30px] md:rounded-bl-[30px] px-[30px]'>
                        <h3 className='gradient_text text-[25px] lg:text-[45px] font-bold'>300+ students</h3>
                        <p className=''>our services have proven to be reliable</p>
                    </div>
                    <div className='bg-white py-[20px] md:rounded-tr-[30px] md:rounded-tl-[30px] md:rounded-br-[30px] px-[30px]'>
                        <h3 className='gradient_text text-[25px] lg:text-[45px] font-bold'>100+ graduates</h3>
                        <p className=''>our services have proven to be reliable</p>
                    </div>
                
                </div>
            </div>

            <div className='flex-1'>
                <img src={CIB} />
            </div> 
        </div>
    </div>
  )
}

export default HomeStats