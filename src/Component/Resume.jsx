import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

// icon import
import { PiStudent } from "react-icons/pi";
import { FaLayerGroup } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";





// img import
import Line from "./../assets/Line5.png";

function Resume() {
  return (
    <>
    <div className="p-3 mt-10 sm:mt-0">
           <div className='bg-gray-400 rounded-lg p-3 sm:p-10'>
                  <div className=" ">
                      <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
                      Resume
                      </h1>
                      <img src={Line} className="text-[1px]" />
                  </div>
{/*  main section of both group */}
           <div className='mt-5  xl:flex  xl:gap-2 ' data-aos="fade-in">
                    {/* first section */}
                    <div className='  p-3 bg-white rounded-2xl shadow-md shadow-black' >
                            <div className='flex items-center gap-2'>

                            <PiStudent className="text-red-700 text-[1.2rem]" />
                                  <h1 className='font-semibold'>Education </h1>
                            </div>
                            <div className="mt-3 bg-red-200 rounded-xl p-4">
                                  <div className=" sm:flex sm:gap-7 sm:items-center">
                                  
                                        <div className=' border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Degree</h1>
                                        <p className='text-[13px]'>Rayat Bahra University</p>
                                        </div>
                                        <div className='sm:flex sm:flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Passing</h1>
                                        <p className='text-[13px]'>2020-24</p>
                                        </div>
                                        <div className='sm:sm:flex flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">CGPA</h1>
                                        <p className='text-[13px]'>7.19</p>
                                        </div>
                                  </div>
                                  
                                </div>
                             </div>

                             {/* second section */}

                             <div className='sm:mt-5 xl:mt-0' >
                             <div className=' p-3 bg-white rounded-2xl shadow-md  shadow-black mt-6 lg:mt-0 sm:p-9 lg:p-2 '>
                            <div className='flex items-center gap-2 '>

                            <FaLayerGroup className="text-red-700 text-[1.2rem]" />
                                  <h1 className='font-semibold'>Experience </h1>
                            </div>
                            <div className="mt-3 bg-red-200 rounded-xl p-4 text-center ">
                                  <div className=" ">
                                  
                                        <div className=' border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500 text-[13px]">Company Name</h1>
                                        <p className='text-[13px]'>Kreativan technologies</p>
                                        </div>
                                        <div className='sm:flex sm:flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">From</h1>
                                        <p className='text-[13px]'>15-Jan-24</p>
                                        </div>
                                        <div className='sm:sm:flex flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">To</h1>
                                        <p className='text-[13px]'>30-Sept-24</p>
                                        </div>
                                  </div>
                                </div>

                             </div>







                             </div>




                              <div className='mt-5 xl:mt-0' >
                             <div className='  p-3 bg-white rounded-2xl shadow-md shadow-black mt-5  lg:mt-0 text-center  '>
                            <div className='flex items-center gap-2 '>

                            <FaNetworkWired className="text-red-700 text-[1.2rem]" />
                                  <h1 className='font-semibold'>Work Skills </h1>
                            </div>
                            <div className="mt-3  bg-red-200 rounded-xl p-4 sm:p-10 text-[17px] text-gray-600">
                                  <div className=" flex gap-5 flex-wrap items-center font-semibold">
                                  <h1 className='underline'>HTML5</h1>
                                  <h1 className='underline'>CSS3</h1>
                                  <h1 className='underline'>TAILWIND CSS</h1>
                                  <h1 className='underline'>BOOTSTRAP</h1>
                                  <h1 className='underline'>JAVASCRIPT</h1>
                                  <h1 className='underline'>REACT.JS</h1>
                                  <h1 className='underline'>Node.js</h1>
                                  <h1 className='underline'>Express.js</h1>
                                  <h1 className='underline'>MongoDB</h1>
                                  <h1 className='underline'>GIT</h1>
                                  <h1 className='underline'>GITHUB</h1>
                                  <h1 className='underline'>Wordpress</h1>
                                  <h1 className='underline'>Figma</h1>
                                  </div>
                                  
                                </div>
                             </div>
                              </div>




                             </div>























            </div>
     </div>
    </>
  )
}

export default Resume
