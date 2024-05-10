import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules'
const LargeScrn = ({testimonials, Irewole, testimonialText,  country, role , company}) => {
  return (
    <div>
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
                                    {testimonialText}
                                </p>
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='flex items-center text-green-700 text-[12px] gap-[4px]'>
                                        <MdLocationOn />
                                        {country}
                                    </div>
                                    <p>
                                        {role} at <span className='bg-red-600 rounded-xl text-white text-[14px] py-[5px] px-[15px] '>{company}</span> 
                                    </p>
                                </div>

                            </div>
                        </div>
                        </SwiperSlide>
    
                    ))
                }

            
        </Swiper>
    </div>
  )
}

export default LargeScrn