import React from "react";

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/assets/vector.png" alt="logo" className="w-8 h-8" />
          <p className="text-black font-semibold text-2xl">videbucks</p>
        </div>

        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-14 text-[#3C3C3C]">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </nav>

        <button className="bg-[#D7DF4D] hover:bg-yellow-400 text-white font-semibold px-4 py-2 border-r-2">
          Get started
        </button>
      </div>
    </header>
  );
};

export default Header;
