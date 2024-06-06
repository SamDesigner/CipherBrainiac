import React from 'react'
import './CourseInfo.css'
import { FaHandPointRight } from "react-icons/fa6";
import bode from '../../assets/images/bode.jpg'
const WebDevelopmentInfo = () => {
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
                        <h1 className='text-black text-[25px]'>What You Will Learn <span className='text-red-600'>[For Junior FrontEnd Developers]</span></h1>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                    
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                    <b>HTML (HyperText Markup Language):</b> Structure of a webpage, tags, attributes, Semantic HTML, forms, tables, multimedia elements.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                    <b>CSS (Cascading Style Sheets):</b>  Styling text, boxes, backgrounds, borders, Flexbox, Grid, responsive design, animations, transitions, preprocessors like SASS or LESS.  
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                    <b>JavaScript:</b>Syntax, data types, variables, operators, control structures, functions,DOM manipulation, event handling, ES6+ features (like arrow functions, promises, async/await), JSON, AJAX, APIs.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                   <b>Github:</b>Repositories, commits, branches, merging,Pull requests, resolving conflicts, collaborative workflows.
                                </p>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-red-600'>
                                    <FaHandPointRight />
                                </div>
                                <p>
                                    <b> Responsive Design:</b>Media Queries: Making layouts adaptable to different screen sizes.Frameworks: Bootstrap.
                                </p>
                            </div>
                    </div>
                </div>
            </div>

            <div className='mt-[50px] flex flex-col gap-[30px]'>
                <h3 className='text-[25px]'>What You Will Learn: <span className='text-red-600'>[For Advanced FrontEnd Development]</span> </h3>
            
                <div className='flex flex-col gap-[20px]'>
                    
                    <div className='flex gap-[10px]'>
                        <div className='text-red-600'>
                            <FaHandPointRight />
                        </div>
                        <p>
                            <b>Advanced JavaScript:</b> Asynchronous Programming,Advanced Functions
                        </p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='text-red-600'>
                            <FaHandPointRight />
                        </div>
                        <p>
                            <b>Modern Frontend Frameworks and Libraries:</b> React.js: Advanced hooks, context API, state management with Redux , performance optimization.
                        </p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='text-red-600'>
                            <FaHandPointRight />
                        </div>
                        <p>
                            <b>Github:</b>Repositories, commits, branches, merging,Pull requests, resolving conflicts, collaborative workflows.
                        </p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='text-red-600'>
                            <FaHandPointRight />
                        </div>
                        <p>
                            <b>Advanced CSS:</b>Tailwind CSS, CSS animation, responsiveness masterclass.
                        </p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='text-red-600'>
                            <FaHandPointRight />
                        </div>
                        <div>
                            <h3>
                                <b>Some Projects:</b>
                            </h3>
                            <ol className='list-decimal'>
                                <li>To-Do List App:
                                    <ul className='list-disc pl-4'>
                                        <li>A simple app to add, edit, and delete tasks.</li>
                                        <li>Use state to manage tasks and local storage to persist them.</li>
                                    </ul>
                                </li>
                                <li>Movie Search App:
                                    <ul className='list-disc pl-4'>    
                                        <li>Fetch movie data from an API and display a list of movies.</li>
                                        <li>Include search functionality to find movies by title.</li>
                                    </ul>
                                </li>
                                <li>Portfolio Website:
                                    <ul className='list-disc pl-4'>    
                                        <li>A personal portfolio</li>
                                        
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebDevelopmentInfo