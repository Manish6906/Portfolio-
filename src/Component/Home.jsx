import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


// img import
import Line from "./../assets/Line5.png";


// icon import
import { FaCode } from "react-icons/fa6";

import { SiCodementor } from "react-icons/si";
const Home = () => {

  useEffect(()=>
  {
    Aos.init({duration: 2000})
  },[])
  return (
    <>
      <div className="p-3 mt-10 sm:mt-0">
        <div className=" bg-gray-400 rounded-lg p-4 sm:p-10">
          <div className="">
            <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
              About Me
            </h1>
            <img src={Line} className="text-[1px]" />
            <p className="mt-4 text-center sm:text-left border-b-2 border-solid border-gray-500 rounded-lg p-2" data-aos="fade-left">
              Hello there! I'm thrilled to welcome you to my portfolio. I am a
              passionate and versatile full-stack developer with a keen interest
              in exploring the latest cutting-edge technologies. My journey in
              the world of web development has been nothing short of
              exhilarating, and I constantly strive to enhance my skills and
              embrace emerging trends in the industry.
            </p>
          </div>
          <h1 className="mt-5 font-medium text-2xl">What I Do!</h1>

          {/* first section */}
          <div className="lg:flex lg:gap-3 " data-aos="fade-up">
            <div className="mt-3 bg-red-200 rounded-xl p-4 shadow-md shadow-black">
              <div className=" flex gap-2 items-center">
                <FaCode className="text-red-700" />
                <h1 className="font-semibold text-[1.2rem] ">Web development</h1>
              </div>
              <p className="mt-1">
                As a developer, I find myself most captivated by the power and
                flexibility of React.js. I'm always eager to dive into new
                projects that leverage React.js and discover innovative ways to
                create fast, scalable, and user-friendly applications .
              </p>
            </div>

            {/* second section */}

            <div className="mt-3 bg-red-200 rounded-xl p-4 shadow-md shadow-black">
              <div className=" flex gap-2 items-center">
              <SiCodementor className="text-red-700" />
                <h1 className="font-semibold text-[1.4rem]">Mentorship</h1>
              </div>
              <p className="mt-1">
              I have also found great joy in sharing my 
              knowledge with others. Being a technical 
              mentor allows me to give back to the 
              community that has supported me 
              throughout my career. 
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
