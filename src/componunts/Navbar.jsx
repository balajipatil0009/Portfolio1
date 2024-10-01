import React from "react";

const Navbar = () => {
  return (
    <div className="text-red-200 max-h-[20vh] flex justify-between items-center md:p-5">
      <img src="./logo.jpg" alt="Logo" className="max-h-[70px]" />
      <div className="flex justify-evenly w-1/2">
        <a href="#about">
          <h1>About</h1>
        </a>
        <a href="#about">
          <h1>Skills</h1>
        </a>
        <a href="#Experience">
          <h1>Experience</h1>
        </a>
        <a href="#Projects">
          <h1>Projects</h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
