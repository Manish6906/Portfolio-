

// img imports
import Line from "./../assets/Line5.png";
import { Link } from 'react-router-dom';
import firstPicture from './../assets/firstProject.png';
import secondPicture from './../assets/secondpicture.png';
import code from './../assets/code.png';
import cake from './../assets/cake.png';

// icon imports
import { FaGithub } from "react-icons/fa6";


// Array of project data
const projects = [
  {
    image: firstPicture,
    title: 'Web Development',
    name: 'hotel-booking',
    visitLink: 'https://hotel-booking-nine-black.vercel.app/',
    githubLink: 'https://github.com/Manish6906/hotel-booking'
  },
  {
    image: secondPicture,
    title: 'Web Development',
    name: 'wooden-galaxy',
    visitLink: 'https://wooden-galaxy-chi.vercel.app/',
    githubLink: 'https://github.com/Manish6906/wooden-galaxy'
  },
  // {
  //   image: code,
  //   title: 'Web Development',
  //   name: 'Password Generator',
  //   visitLink: 'https://password-generator-zeta-gules-23.vercel.app/',
  //   githubLink: 'https://github.com/Manish6906/PasswordGenerator'
    
    {
    image: secondPicture,
    title: 'Web Development',
    name: 'bakery Website',
    visitLink: 'https://bakery-eight-alpha.vercel.app/',
    githubLink: 'https://github.com/Manish6906/Bakery-'
  },
    // {
    //   image: code,
    //   title: 'Web Development',
    //   name: 'Bakery Website',
    //   visitLink: 'https://bakery-eight-alpha.vercel.app/',
    //   githubLink: 'https://github.com/Manish6906/Bakery-'
    // }
];

function Work() {
  return (
    <div className='p-3 mt-10 sm:mt-0'>
      <div className='bg-gray-400 rounded-lg p-5 sm:p-10'>
        <div>
          <h1 className='font-semibold text-[1.5rem] text-center sm:text-left'>Portfolio</h1>
          <img className="" src={Line} alt="line divider" />
        </div>
        <div className='mt-4 font-semibold'>
          <Link to="#" className='text-gray-800'>All Project</Link>
        </div>

        <div className='mt-4 lg:flex  lg:gap-5  ' data-aos="fade-in">
          {projects.map((project, index) => (
            <div key={index} className='bg-gray-600 p-2 shadow-md shadow-black rounded-md mt-5 lg:mt-0'>
              <img className="" src={project.image} alt={project.name} />
              <p className='mt-3 font-medium'>{project.title}</p>
              <div className='flex items-center justify-between p-1'>
                <p className='font-normal text-sm'>{project.name}</p>
                <div className='flex items-center gap-5'>
                  <Link to={project.visitLink} target='_blank' className='text-white'>Visit</Link>
                  <Link to={project.githubLink} target='_blank' className='text-white text-[1.2rem]'><FaGithub /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
