import React, { useState } from "react";
import "../app.css";
import cartImage from "../assets/cartPicture.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()

  const goToCart=()=>{
    navigate('/cart');
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0" onClick={()=>navigate('/')}>
            <a href="#" className="text-3xl font-bold text-red-500">
              EKart
            </a>
          </div>


          <div className="hidden md:block flex-grow  mx-4">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-9 border border-gray-400 rounded shadow pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>
          </div>


          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
            <button className="p-0" onClick={()=>goToCart()}>
              <img className="w-8 h-8" src={cartImage} alt="Cart" />
            </button>
          </div>


          <div className="md:hidden flex items-center space-x-4">
            <button className="p-0">
              <img className="w-8 h-8" src={cartImage} alt="Cart" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white space-y-3 shadow-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute left-3 top-1.5 text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>
          <a href="/" className="block text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
