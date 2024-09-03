// src/components/Navbar.tsx

import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Logo from '../assets/images/logo/FlexDown-logo.png';
import { useWindowResize } from '@/utils/windowResize';

const Navbar: React.FC = () => {
  const isMobile = useWindowResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: '#flexdown', label: 'FlexDown' },
    { href: '#packages', label: 'Packages' },
    { href: '#analytics', label: 'Analytics' },
    { href: '#marketing', label: 'Marketing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about-us', label: 'About Us' },
  ];

  return (
    <div className="flex justify-between items-center w-3/4 absolute top-0 py-8">
      {/* Logo */}
      <img src={Logo} alt="Company Logo" className="h-12 rounded-md" />

      {isMobile ? (
        <>
          {/* Mobile Menu Icon */}
          <IoMenu className="text-4xl cursor-pointer text-white" onClick={toggleMenu} />
          {/* Mobile Menu */}
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
        </>
      ) : (
        <nav className="flex space-x-4 font-bold text-white">
          {menuItems.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
