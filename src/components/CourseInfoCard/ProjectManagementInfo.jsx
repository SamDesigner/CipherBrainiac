import React from 'react'
import ruel from '../../assets/images/ruel.jpg';
import './CourseInfo.css'
import { FaHandPointRight } from "react-icons/fa6";
import headerImage from '../../assets/images/whattolearn.png'
const ProjectManagementInfo = () => {
  return (
    <div className='bg-white px-[16px] lg:px-[80px] md:py-[100px]'>
        <div className='max-w-[1440px] mx-auto flex flex-col gap-[30px]'>
            <div className='md:py-[40px]'>
                <h1 className='font-[700] text-[30px] text-center md:text-left md:text-[50px]'>Meet Your <span className='text-red-600'>Instructor</span></h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-[20px]'>
                <div className='flex-1 flex justify-center '>
                    <div className='h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-black relative '>
                        <img className='h-full w-full object-cover absolute higher_index' src={ruel} alt='Project Management Instructor' />
                        <div className='h-full w-full top-[-6%] right-[-6%] bg-primaryOrange absolute'>

                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-[20px]'>
                    <div>
                        <h1 className='text-red-600 text-[25px]'>What You Will Learn</h1>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                    
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                Understand different project management frameworks and methodologies, such as Waterfall, Agile, Scrum, Kanban, Lean, and PRINCE2. 
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                Learn how to create comprehensive project plans, including defining project scope, objectives, deliverables, milestones, and timelines.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                Gain skills in identifying, analyzing, and mitigating project risks. Develop contingency plans to address potential issues.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                    Develop strategies for ensuring that project deliverables meet quality standards and stakeholder expectations.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                Develop strong communication skills to effectively convey project information to team members, stakeholders, and sponsors. Learn how to create reports, hold meetings, and give presentations.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectManagementInfo