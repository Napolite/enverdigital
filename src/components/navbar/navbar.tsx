import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between text-[#D9D9D9] w-full bg-[blue]">
      <div>
        <img />
        <div className="text-white font-[700] text-[28px]">Enver</div>
      </div>
      <div className="flex space-between w-[30%] bg-[red]">
        <div className="text-[#5454D4]">Home</div>
        <div>Services</div>
        <div>Our Project</div>
        <div>About Us</div>
      </div>
      <div>Contact Us</div>
    </nav>
  );
}

export default Navbar;
