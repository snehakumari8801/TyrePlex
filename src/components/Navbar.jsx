import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subLinks = [
    {
      heading: "Car Types",
      text: "Popular car tyre brands",
      content: [
        "MRF Tyre",
        "CEAT Tyre",
        "Apollo Tyre",
        "Bridge stone tyres",
        "Jk tyre",
        "All car tyre",
      ],
    },
    {
      heading: "Bike Types",
      text: "Popular bike tyre brands",
      content: [
        "MRF Tyre",
        "CEAT Tyre",
        "Apollo Tyre",
        "Bridge stone tyres",
        "Jk tyre",
        "All bike tyre",
      ],
    },
    {
      heading: "Tyre Pressure",
      text: "Recommended tyre pressure",
      content: [
        "Standard Pressure: 30 PSI",
        "High Load Pressure: 35 PSI",
        "Low Pressure: 25 PSI",
      ],
    },
    {
      heading: "Commercial Tyre",
      text: "Commercial vehicle tyre brands",
      content: [
        "MRF Truck Tyre",
        "CEAT Truck Tyre",
        "Apollo Truck Tyre",
        "Bridge stone Truck Tyres",
        "Jk Truck Tyre",
      ],
    },
    {
      heading: "Accessories",
      text: "Tyre accessories",
      content: [
        "Tyre Covers",
        "Tyre Sealant",
        "Tyre Pressure Gauges",
        "Wheel Aligners",
      ],
    },
    {
      heading: "More",
      text: "Additional tyre information",
      content: [
        "Tyre Maintenance Tips",
        "How to Check Tyre Wear",
        "Seasonal Tyre Changes",
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md p-4 flex flex-col sm:flex-row items-center justify-between w-full">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to='/'>
        <h1 className="text-2xl font-bold text-red-600">
          <span className="text-black">Tyre</span>
          <span className="text-red-500">Plex</span>
        </h1>
        </Link>

        {/* Menu Button for mobile */}
        <div className="sm:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 text-2xl gap-14 ml-10"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Centered Search Bar */}
      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0 justify-start ">
        <div className="flex items-center ml-0 sm:ml-40 bg-gray-200 rounded-full max-w-xs w-full sm:w-96 ">
          <CiSearch className="text-gray-600 ml-2" />
          <input
            type="text"
            placeholder="Search For MRF Ty.."
            className="bg-gray-200 rounded-full border-none p-2 w-full placeholder-gray-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full mt-4 sm:mt-0">
        {/* Sub Links for larger screens */}
        <div className="hidden sm:flex flex-row space-x-4 ml-48">
          {subLinks.map((link) => (
            <div key={link.heading} className="relative group">
              <button className="font-semibold text-gray-600 hover:text-red-500">
                {link.heading}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden flex flex-col items-start mt-4 w-full">
            {subLinks.map((link) => (
              <div key={link.heading} className="mb-4">
                <button className="font-semibold text-gray-600 hover:text-red-500 w-full text-left">
                  {link.heading}
                </button>
              
              </div>
            ))}
          </div>
        )}

        {/* Login Icon */}
        <div className="flex items-center space-x-2 mt-4 sm:mt-0 ml-8 cursor-pointer">
          <GoPerson className="text-gray-600 text-xl" />
          <span className="font-semibold text-gray-600 hover:text-red-500">
            Login
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
