import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdMenuBook, MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

function FirstSection() {
  return (
    <div className="p-2 sticky bottom-0 josefin-sans hidden sm:block sm:mt-3">
      <div className="mt-10 p-4 rounded-2xl flex justify-between gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg grid place-items-center cursor-pointer p-2 text-white ${
              isActive ? "bg-red-500" : "bg-gray-600"
            }`
          }
        >
          <FaHome />
          <p className="text-[12px]">Home</p>
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `rounded-lg grid place-items-center cursor-pointer p-2 text-white ${
              isActive ? "bg-red-500" : "bg-gray-600"
            }`
          }
        >
          <MdMenuBook />
          <p className="text-[12px]">Resume</p>
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `rounded-lg grid place-items-center cursor-pointer p-2 text-white ${
              isActive ? "bg-red-500" : "bg-gray-600"
            }`
          }
        >
          <MdOutlineWorkOutline />
          <p className="text-[12px]">Work</p>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `rounded-lg grid place-items-center cursor-pointer p-2 text-white ${
              isActive ? "bg-red-500" : "bg-gray-600"
            }`
          }
        >
          <BiSolidContact />
          <p className="text-[12px]">Contact</p>
        </NavLink>
      </div>
    </div>
  );
}

export default FirstSection;
