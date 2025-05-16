
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <nav className='bg-blue-500 text-white p-4 sticky top-0 z-50'>
        <div className='flex justify-between items-center p-4 bg-sky-300 rounded-lg'>
        
        <Link to="/">
            <i className='font-medium  josefin-sansa cursor-pointer text-[1.4rem] sm:text-[2rem]'>PORTFOLIO</i>
            </Link>
            <p className='text-[2rem] cursor-pointer ac'><FaRegUserCircle /></p>

   </div>
      </nav>
    </>
  )
}

export default Navbar
