// img imports
import Line from "./../assets/Line5.png";
import { Link } from 'react-router-dom';

// icon imports
import { FaGithub } from "react-icons/fa6";
import digiAi from '../assets/Images/Screenshot 2025-05-16 102403.png';
import fusion from '../assets/Images/Screenshot 2025-05-16 102935.png';
import astro from '../assets/Images/Screenshot 2025-05-16 103152.png';
import tanish from '../assets/Images/Screenshot 2025-05-16 103241.png';

// Array of project data
const projects = [
  {
    image: fusion,
    title: 'Web Development',
    name: 'DigiSky Fusion ',
    visitLink: 'https://digiskyfusion.com/',
    githubLink: 'https://github.com/Manish6906/DigiskyfusionWebsite'
  },
    {
    image: digiAi,
    title: 'Web Development',
    name: 'DigiSky.Ai',
    visitLink: 'https://digisky.ai/',
    githubLink: 'https://github.com/Digiskyfusion/Project-Frontend'
  },
  {
    image: astro,
    title: 'Web Development',
    name: 'Astrologer',
    visitLink: 'https://astroaghoribaba.com/',
    githubLink: 'https://github.com/Manish6906/aasstrologer'
  },
  {
    image: tanish,
    title: 'Web Development',
    name: 'Tanish Enterpris',
    visitLink: 'https://tanishenterpriss.com/',
    githubLink: 'https://github.com/Manish6906/Construction'
  }
];

function Work() {
  return (
    <div className='px-4 josefin-sansa sm:px-6 lg:px-3 lg:py-3'>
      <div className='bg-gray-400 rounded-lg p-5 sm:p-10'>
        {/* Section Title */}
        <div>
          <h1 className='font-bold text-2xl sm:text-3xl text-center sm:text-left text-gray-900'>
            Portfolio
          </h1>
          <img className="mt-2 mx-auto sm:mx-0 w-32" src={Line} alt="line divider" />
        </div>

        {/* All Projects link */}
        <div className='mt-4 font-semibold'>
          <Link to="#" className='text-gray-800 underline'>All Projects</Link>
        </div>

        {/* Project Grid */}
        <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-600 rounded-lg shadow-md hover:shadow-xl p-1 transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden'
              data-aos="fade-in"
            >
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-48 object-fill rounded-md'
              />
              <div className='p-4'>
                <p className='text-white font-medium text-lg'>{project.title}</p>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-gray-200 text-sm'>{project.name}</p>
                  <div className='flex items-center gap-4'>
                    <a
                      href={project.visitLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='text-white hover:underline text-sm'
                    >
                      Visit
                    </a>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='text-white text-lg'
                    >
                      <FaGithub />
                    </a>
                  </div>
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
