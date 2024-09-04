// src/components/Navbar.tsx
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Logo from '../assets/images/logo/FlexDown-logo.png';
import { useWindowResize } from '@/utils/windowResize';
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  const isMobile = useWindowResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: '#flexdown', label: 'FlexDown' },
    { href: '#packages', label: 'Packages' },
    { href: '#analytics', label: 'Analytics' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about-us', label: 'About Us' },
  ];

  return (
    <div className="flex justify-between items-center w-[90%] md:w-[80%] absolute top-0 py-8 px-2">
      {/* Logo */}

      <div className="logo flex items-center ">
        <img src={Logo} alt="Company Logo" className="h-12 rounded-md" />
      </div>
      {isMobile ? (
        <div>
      
          <IoMenu className="text-4xl cursor-pointer text-white" onClick={toggleMenu} />
        
          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4">
              {menuItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-black  text-l hover:font-bold hover:bg-opacity-200 px-4 py-2 rounded"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      ) : (
        <nav className="flex space-x-4 font-bold text-white">
          {menuItems.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      )}



<div className='text-white w-[15%] font-bold flex items-center justify-between'>
  {/* Login Button */}
  <a className='flex items-end justify-between' href="login">
 
    <span className="text-xl block md:hidden"><IoPersonSharp /></span> 
 
    <span className="hidden md:block">Login</span>
  </a>
  
  {/* Signup Button */}
  <Link className='flex items-center justify-between' to="/signup">
          <span className="text-xl block md:hidden"><IoPersonAddSharp /></span>
          <span className="hidden md:block">Sign Up</span>
        </Link>
</div>
    </div>
  );
};

export default Navbar;
