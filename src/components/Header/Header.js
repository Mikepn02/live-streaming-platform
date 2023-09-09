import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faTimes} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="p-4">
      <div className="container mx-auto flex flex-row items-center justify-between w-full">
        <div className="flex items-center space-x-2 mb-4 md:mb-0 ">
          <img src="/assets/logo.svg" alt="logo" className="w-8 h-8" />
          <p className="text-black font-semibold text-2xl">videbucks</p>
        </div>

        <nav className="mb-4  md:mb-0 relative ">
          <ul
            className={` mx-auto md:space-x-12 space-x-0 text-[#3C3C3C] ${
              isVisible ? "flex flex-col justify-center p-12 space-y-8   bg-blue items-center absolute bg-blue-500 z-10 top-12 left-0 w-full" : "hidden lg:flex "
              
            } `}
          >
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
          <FontAwesomeIcon
            icon={isVisible ? faTimes : faBars}
            onClick={toggleVisible}
            className="lg:hidden cursor-pointer right-0"
          />
        </nav>

        <Link to="/dashboard">
          <button className="hidden lg:flex bg-[#D7DF4D] hover:bg-yellow-400 text-white font-semibold px-4 py-2 border-r-2">
            Get started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
