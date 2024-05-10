import React from 'react'
import ContactImage from '../../assets/images/contact.png'
const Contact = () => {
  return (
    <div className='px-[16px] py-[50px] lg:py-[0px] lg:px-[80px]  max-w-[1440px] mx-auto bg-gray-100'> 
        <div className='flex flex-col md:flex-row '>
            <div className='flex-1'>
                <div className='h-full '>
                    <img className='h-full' src={ContactImage} />
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='lg:w-[500px] mx-auto flex flex-col justify-center gap-[20px] '>
                    <div>
                        <h1 className='text-[40px] gradient_text'>Send us a mail</h1>
                        <p className='text-[15px]'>Send us a direct mail we reply swift, your response will bw in 24hrs - 48hrs</p>
                    </div>
                    <form className='flex flex-col gap-[15px]'>
                        <div className='flex gap-[20px] '>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label className='text-[14px] text-red-700'>First Name</label>
                                <input className='border w-full text-[15px]  p-3 rounded-[10px]' type='text' placeholder='John' />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label className='text-[14px] text-red-700'>Second Name</label>
                                <input className='border text-[15px]   w-full p-3 rounded-[10px]' type='text' placeholder='Doe' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'> 
                            <label className='text-[14px] text-red-700'>Phone Number</label>
                            <input type='text' className='border w-full p-3 rounded-[10px]' placeholder='+2349023046042' />
                        </div>
                        <div className='flex flex-col gap-2'> 
                            <label className='text-[14px] text-red-700'>Subject</label>
                            <input type='text' className='border n w-full text-[15px]  p-3 rounded-[10px]' placeholder='+2349023046042' />
                        </div>
                        <div className='flex flex-col gap-2'> 
                            <label className='text-[14px] text-red-700'>Message</label>
                            <textarea type='text' className='border text-[15px]   w-full p-3 rounded-[10px]' placeholder='send us a message' ></textarea>
                        </div>

                        <button className='special_bg p-3 rounded-xl'>Send Mail</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact