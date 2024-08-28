// src/components/Navbar.tsx

import React from 'react';
import { IoMenu } from 'react-icons/io5'; 
import Logo from '../assets/images/logo/FlexDown Main Logo.png';
import { useWindowResize } from '@/utils/windowResize';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const isMobile = useWindowResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between items-center w-3/4 absolute top-0 py-8">
      {/* Logo */}
      <div className="logo flex items-center ">
        <img src={Logo} alt="Company Logo" className="h-12 rounded-md" />
      </div>
      {isMobile ? (
        <div>
          {/* Menu Icon (Visible on mobile) */}
          <IoMenu
            className="text-4xl cursor-pointer text-logo"
            onClick={toggleMenu}
          />
          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4">
              <a href="#flexdown" onClick={() => setIsMenuOpen(false)}>FlexDown</a>
              <a href="#packages" onClick={() => setIsMenuOpen(false)}>Packages</a>
              <a href="#analytics" onClick={() => setIsMenuOpen(false)}>Analytics</a>
              <a href="#marketing" onClick={() => setIsMenuOpen(false)}>Marketing</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a href="#about-us" onClick={() => setIsMenuOpen(false)}>About Us</a>
            </nav>
          )}
        </div>
      ) : (
        <nav className="flex space-x-4 font-bold text-logo">
          <a href="#flexdown">FlexDown</a>
          <a href="#packages">Packages</a>
          <a href="#analytics">Analytics</a>
          <a href="#marketing">Marketing</a>
          <a href="#faq">FAQ</a>
          <a href="#about-us">About Us</a>
        </nav>
      )}
    </div>
  );
};
export default Navbar;
