import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icons
import { FaHome } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';

function Bottom() {
  const location = useLocation();
  const [clicked, setClicked] = useState(null);

  // Set active icon based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      setClicked('home');
    } else if (location.pathname === '/resume') {
      setClicked('resume');
    } else if (location.pathname === '/work') {
      setClicked('work');
    } else if (location.pathname === '/contact') {
      setClicked('contact');
    }
  }, [location.pathname]);

  // Styles for each icon
  const getLinkStyle = (icon) => ({
    backgroundColor: clicked === icon ? 'red' : 'gray',
    transition: 'background-color 0.3s ease', // smooth color change
  });

  return (
    <div className="p-2 josefin-sans sticky bottom-0 z-50 bg-white">
      <div className="p-4 rounded-2xl flex justify-between sm:hidden gap-5">

        <Link
          to="/"
          onClick={() => setClicked('home')}
          style={getLinkStyle('home')}
          className="text-white rounded-lg grid place-items-center p-2 w-full"
        >
          <FaHome />
          <p className="text-[12px]">Home</p>
        </Link>

        <Link
          to="/resume"
          onClick={() => setClicked('resume')}
          style={getLinkStyle('resume')}
          className="text-white rounded-lg grid place-items-center p-2 w-full"
        >
          <MdMenuBook />
          <p className="text-[12px]">Resume</p>
        </Link>

        <Link
          to="/work"
          onClick={() => setClicked('work')}
          style={getLinkStyle('work')}
          className="text-white rounded-lg grid place-items-center p-2 w-full"
        >
          <MdOutlineWorkOutline />
          <p className="text-[12px]">Work</p>
        </Link>

        <Link
          to="/contact"
          onClick={() => setClicked('contact')}
          style={getLinkStyle('contact')}
          className="text-white rounded-lg grid place-items-center p-2 w-full"
        >
          <BiSolidContact />
          <p className="text-[12px]">Contact</p>
        </Link>

      </div>
    </div>
  );
}

export default Bottom;
