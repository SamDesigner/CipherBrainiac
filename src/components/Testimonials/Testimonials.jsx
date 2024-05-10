import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules'
import Irewole from '../../assets/images/irewole.jpg'
import { MdLocationOn } from "react-icons/md";
import 'swiper/css';
const Testimonials = () => {
    const testimonials = [
        {
            id:1,
            name: "Irewole Anjorin",
            testimonial:"I walked into Cipher Brainiac internship programme in a career standstill. Now I am building vibrant interactive websites that leaves users clicking more. Today, I'm a confident front-end engineer , so stop waiting click the apply button and join the CIB family",
            country:'Lagos, Nigeria',
            role:'FrontEnd Engineer',
            company: 'Remita',
            image: Irewole
        },
        {
            id:1,
            name: "Irewole Anjorin",
            testimonial:"I walked into Cipher Brainiac internship programme in a career standstill. Now I am building vibrant interactive websites that leaves users clicking more. Today, I'm a confident front-end engineer , so stop waiting click the apply button and join the CIB family",
            country:'Lagos, Nigeria',
            role:'FrontEnd Engineer',
            company: 'Remita',
            image: Irewole
        },
        {
            id:1,
            name: "Irewole Anjorin",
            testimonial:"I walked into Cipher Brainiac internship programme in a career standstill. Now I am building vibrant interactive websites that leaves users clicking more. Today, I'm a confident front-end engineer , so stop waiting click the apply button and join the CIB family",
            country:'Lagos, Nigeria',
            role:'FrontEnd Engineer',
            company: 'Remita',
            image: Irewole
        },
        {
            id:1,
            name: "Irewole Anjorin",
            testimonial:"I walked into Cipher Brainiac internship programme in a career standstill. Now I am building vibrant interactive websites that leaves users clicking more. Today, I'm a confident front-end engineer , so stop waiting click the apply button and join the CIB family",
            country:'Lagos, Nigeria',
            role:'FrontEnd Engineer',
            company: 'Remita',
            image: Irewole
        },
 
    ]
  return (
    <div className='bg-specialBrown py-[100px]'>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] '>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay:2500,
                    
                }}
                modules={[Autoplay]}
                >
                
                    {
                       
                        testimonials.map((testimonial)=>(
                            <SwiperSlide>
                            <div className='flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl'>
                                <div className='flex-1'>
                                    <img className='rounded-tl-3xl' src={Irewole} />
                                </div>
                                <div className='flex-1 p-[15px] flex flex-col gap-[10px] justify-between'>
                                    <p className='text-gray-600 text-[16px] leading-[30px]'>
                                        {testimonial.testimonial}
                                    </p>
                                    <div className='flex flex-col gap-[8px]'>
                                        <div className='flex items-center text-green-700 text-[12px] gap-[4px]'>
                                            <MdLocationOn />
                                            {testimonial.country}
                                        </div>
                                        <p>
                                            {testimonial.role} at <span className='bg-red-600 rounded-xl text-white text-[14px] py-[5px] px-[15px] '>{testimonial.company}</span> 
                                        </p>
                                    </div>

                                </div>
                            </div>
                            </SwiperSlide>
       
                        ))
                    }

               
            </Swiper>
        </div>
    </div>

  )
}

export default Testimonials