import React from 'react'
import Facebook from '../../assets/svg/facebook.svg'
import LinkedIn from '../../assets/svg/linkedIn.svg'
import gmail from '../../assets/images/gmail.png'
import Instagram from '../../assets/images/instagram.png'
import Whatsapp from '../../assets/images/whatsapp.png'
const HomeSocials = () => {
  return (
    <div className='bg-white flex items-center justify-center gap-[30px] py-[50px]'>
        <div className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'>
            <img className='h-full w-full' src={Facebook} />
        </div>
        <div className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'>
            <img className='h-full w-full' src={LinkedIn} />
        </div>
        <div className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'>
            <img className='h-full w-full' src={gmail} />
        </div>
        <div className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'>
            <img className='h-full w-full' src={Instagram} />
        </div>
        <div className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'>
            <img className='h-full w-full' src={Whatsapp} />
        </div>
    </div>
  )
}

export default HomeSocials