import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

// images and files
import Mainpic from './../assets/Images/A1_33_261dffb8-1073-462d-b670-13e2d0b2616a.webp';
import pdf from "./../assets/Images/Manish_Cv.pdf";

// icons
import { FaFacebookSquare, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

function Sidebar() {
  return (
    <>
      <div className='p-3 josefin-sansa mt-14'>
        <div className='bg-gray-200 mt-2 rounded-md p-4 flex flex-col items-center' data-Aos="zoom-in">
          <div className='h-[7rem] w-[7rem] overflow-visible'>
            <img className='rounded-xl relative bottom-7 border-2 border-dashed border-yellow-400' src={Mainpic} />
          </div>
          <h1 className='text-[2rem] font-medium josefin-sans'>Manish</h1>
          <p className='text-gray-800 font-light'>Mern Stack Developer</p>

          <div className='mt-3 flex justify-evenly items-center w-[80%] text-[1.5rem] sm:w-[90%]'>
            <Link to="https://www.facebook.com/profile.php?id=100042788022907" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] text-blue-800 hover:scale-110 transition'><FaFacebookSquare /></Link>
            <Link to="https://www.linkedin.com/in/manish-sharma-0983b6204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] text-blue-800 hover:scale-110 transition'><FaLinkedin /></Link>
            <Link to="https://github.com/Manish6906" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] hover:scale-110 transition'><FaGithub /></Link>
            <Link to="https://www.instagram.com/?hl=en" target='_blank' className='bg-sky-300 rounded-lg p-[0.5rem] text-pink-500 hover:scale-110 transition'><FaInstagramSquare /></Link>
          </div>

          <div className='bg-gray-300 rounded-xl mt-10 p-3 shadow-sm shadow-black'>

            {/* Phone */}
            <a href="tel:+917807895370" className='flex items-center p-3 gap-3 rounded-md border-b-2 border-gray-500  transition cursor-pointer'>
              <FaMobileScreenButton />
              <div>
                <p className='text-[13px] text-gray-500 font-medium'>Phone No</p>
                <p className='text-[12px] font-semibold'>+91 7807895370</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:manishsharma6906@gmail.com" className='flex items-center p-3 gap-3 rounded-md border-b-2 border-gray-500  transition cursor-pointer'>
              <MdOutlineMail />
              <div>
                <p className='text-[13px] text-gray-500 font-medium'>Email Id</p>
                <p className='text-[12px] font-semibold'>manishsharma6906@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <div className='flex items-center p-3 gap-3 rounded-md border-b-2 border-gray-500'>
              <CiLocationOn />
              <div>
                <p className='text-[13px] text-gray-500 font-medium'>Location</p>
                <p className='text-[12px] font-semibold'>Chandigarh</p>
              </div>
            </div>

            {/* Download Resume */}
            <div className='mt-5 p-2 grid place-items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg active:opacity-70 shadow-2xl shadow-black'>
              <button className='flex items-center gap-1 text-black font-medium'>
                <GoDownload />
                <a href={pdf} download="ManishCV">Download Resume</a>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
