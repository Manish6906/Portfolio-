
import {  Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"


// import picture
import Mainpic from './../assets/Images/A1_33_261dffb8-1073-462d-b670-13e2d0b2616a.webp';

import pdf from "../assets/Images/Manish_cv.pdf"
// icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";







function Sidebar() {
  return (
    <>
      <div className='p-3 mt-14'>
        <div className='bg-gray-200 mt-2 rounded-md p-4 flex flex-col items-center' data-Aos="zoom-in">
              <div className=' h-[7rem] w-[7rem] overflow-visible'>
                   <img className='rounded-xl relative bottom-7 border-2 border-dashed border-yellow-400' src={Mainpic} />
                   {/* <img className='rounded-xl relative bottom-7 border-2 border-dashed border-yellow-400' src={profile} /> */}

               </div>
              <h1 className='text-[2rem] font-medium'>Manish</h1>
             <p className='text-gray-800 font-light'> Web Developer</p>
                <div className=' mt-3 flex justify-evenly items-center w-[80%] text-[1.5rem] sm:w-[90%]'>
                  <Link to="https://www.facebook.com/profile.php?id=100042788022907" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer text-blue-800'><FaFacebookSquare /></Link>
                  <Link to="https://www.linkedin.com/in/manish-0983b6204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  text-blue-800'><FaLinkedin /></Link>
                  <Link to="https://github.com/Manish6906" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  '><FaGithub /></Link>
                  <Link to="https://www.instagram.com/?hl=en" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  text-pink-500'><FaInstagramSquare /></Link>
                </div>
              <div className='bg-gray-300 rounded-xl mt-10 p-3 shadow-sm shadow-black '>
                     <div className='flex items-center p-3 gap-3 rounded-md border-b-2 border-solid border-gray-500'>
                          <FaMobileScreenButton />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Phone No</p>
                          <p className='text-[12px] font-semibold'>+91 7807895370</p>
                          </div>
                     </div>

                     <div className='flex items-center  p-3 gap-2 rounded-md border-b-2 border-solid border-gray-500'>
                     <MdOutlineMail />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Email Id</p>
                          <p className='text-[12px] font-semibold'>manishsharma6906@gmail.com</p>
                          </div>
                     </div>

                     <div className='flex items-center  p-3 gap-2  border-b-2 rounded-md border-solid border-gray-500'>
                     <CiLocationOn />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Location</p>
                          <p className='text-[12px] font-semibold'>Chandigarh</p>
                          </div>
                     </div>
                     <div className='mt-5 p-2 grid place-items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg active:opacity-70 shadow-2xl shadow-black'>
                     <button className='flex items-center gap-1 '><GoDownload  /><a href={pdf} download='ManishCV'>Download Resume </a></button>
                    
                     </div>
                    
               </div>
               
        </div>
     
    </div>
    
    
    </>
  )
}

export default Sidebar
