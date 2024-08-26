// src/components/Navbar.tsx

import React from 'react';
import Logo from '../assets/images/logo/FlexDown Main Logo.png';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-3/4 absolute top-0 py-8">
      {/* Logo */}
      <div className="logo flex items-center">
        <img src={Logo} alt="Company Logo" className="h-12 rounded-md" />
      </div>
      {/* Navigation Links */}
      <nav className="flex space-x-4 font-bold hover:text-blue-500 text-logo" >
        <a href="#flexdown" >FlexdDown</a>
        <a href="#packages" >Packages</a>
        <a href="#analytics">Analytics</a>
        <a href="#marketing" >Marketing</a>
        <a href="#faq" >FAQ</a>
        <a href="#about-us" >About Us</a>
      </nav>
    </div>
  );
};

export default Navbar;
