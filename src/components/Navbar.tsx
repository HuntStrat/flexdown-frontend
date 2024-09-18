// src/components/Navbar.tsx
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/images/logo/FlexDown-logo.png";
import { useWindowResize } from "@/utils/windowResize";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const isMobile = useWindowResize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/analytics", label: "Analytics" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
  ];

  const menuItemsMobile = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/analytics", label: "Analytics" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
  ];
  console.log(window.innerWidth);
  return (
    <div className="flex justify-between md:justify-between items-center w-full sticky top-0 py-6 px-6 md:px-20 bg-primary z-20 ">
      {/* Logo */}

      <div className="logo w-[12rem] md:w-[13rem]">
        <img src={Logo} alt="Company Logo" className=" rounded-md w-full" />
      </div>
      {isMobile ? (
        <div>
          <IoMenu
            className="text-3xl cursor-pointer text-white"
            onClick={toggleMenu}
          />

          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full flex flex-col items-center p-4 bg-[#ffffff9f] backdrop-blur-[5px]">
              {menuItemsMobile.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={closeMenu}
                  className="text-xl text-black px-4 py-2 rounded"
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      ) : (
        <nav className="flex items-center justify-between space-x-4 font-bold text-white  min-w-[20rem]  md:ml-8 text-tx-clamp lg:text-lg">
          {menuItems.map(({ href, label }) => (
            <Link key={href} to={href}>
              {label}
            </Link>
          ))}
          <div className="text-white font-bold flex items-center gap-6 text-tx-clamp">
            {/* Login Button */}
            <Link to="login">
              <span className="hidden md:block lg:text-base">Login</span>
            </Link>

            {/* Signup Button */}
            <Link to="/signup">
              <span className="hidden md:block text-[1.3vw] lg:text-base px-3 py-1 bg-purple hover:bg-[#7139bb] rounded-md ">
                Sign Up
              </span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
