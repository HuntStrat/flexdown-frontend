// src/components/Navbar.tsx
import React, { useCallback, useEffect, useState } from "react";
import {
  IoMenu,
  IoClose,
  IoPersonSharp,
  IoPersonAddSharp,
} from "react-icons/io5";

// import Logo from "../assets/images/logo/FlexDown-logo.png";
// import { useWindowResize } from "@/utils/windowResize";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { IoPersonSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { navData } from "@/data";
// import CallToActionButton from "./ui/CallToActionButton";
import NavButton from "./ui/NavButton";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // const isMobile = useWindowResize();
  const [hasScrolled, setHasScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;

    if (offset > 50 && !hasScrolled) {
      setHasScrolled(true);
    } else if (offset <= 50 && hasScrolled) {
      setHasScrolled(false);
    }
    console.log(offset);
  }, [hasScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  // const closeMenu = () => setIsMenuOpen(false);

  // const menuItems = [
  //   { href: "#flexdown", label: "FlexDown" },
  //   { href: "#packages", label: "Packages" },
  //   { href: "#analytics", label: "Analytics" },
  //   { href: "#faq", label: "FAQ" },
  //   { href: "#about-us", label: "About Us" },
  // ];

  return (
    <section className="fixed top-0 left-0 right-0 lg:mx-auto w-full  lg:p-4 z-30 ">
      <nav
        className={`${hasScrolled ? "flex items-center justify-between gap-4 md:bg-white p-2 md:w-[720px] mx-auto md:rounded-[50px] md:shadow-lg backdrop-blur-sm shadow-glass" : "flex items-center justify-between gap-4 lg:gap-32 lg:px-8 mx-auto p-4"}`}
      >
        {/* logo */}
        <img
          src={navData.logo.src}
          alt={navData.logo.alt}
          className="logo z-40"
          width={125}
          height={125}
        />

        {/* Mobile menun button */}
        <NavButton
          customFunc={toggleMenu}
          otherClasses="focus:outline-none md:hidden z-40 "
          title=""
          icon={
            isMenuOpen ? (
              <IoClose className=" size-5 transition-transform transform scale-90" />
            ) : (
              <IoMenu className=" size-5 transition-transform transform scale-100" />
            )
          }
        />

        {/* navlinks */}
        <div className="navlinks hidden md:block">
          <ul className="flex gap-4">
            {navData.menuItems.map((item) => (
              <React.Fragment key={item.id}>
                <a href={item.href}>
                  <li
                    className={`text-sm font-medium ${hasScrolled ? "  hover:text-[#576a8a]" : ""}`}
                  >
                    {item.label}
                  </li>
                </a>
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* CTA-button */}
        <div className="cta-btn md:flex gap-4 hidden">
          <Link
            to="/login"
            title="Log in "
            className={`bg-white border border-[#E3E3E3] w-max flex items-center gap-2 rounded-full xl p-2 px-4 font-semibold `}
          >
            Login{" "}
            <span>
              <IoPersonSharp />
            </span>
          </Link>
          <Link
            to="/signup"
            title="Sign Up "
            className={`bg-white border border-[#E3E3E3] w-max flex items-center gap-2 rounded-full xl p-2 px-4 font-semibold `}
          >
            Sign Up
            <span>
              <IoPersonAddSharp />
            </span>
          </Link>
          {/* <CallToActionButton
            title="Get Started"
            linkTo="/get-started"
            otherClasses={`bg-white text-black w-max border ${hasScrolled ? "border-[#E3E3E3]" : "border-[#E3E3E3]"}  `} /> */}
        </div>

        {/* Mobile Menu and Overlay */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-20"
              onClick={toggleMenu} // Click outside the menu to close
            />

            {/* Mobile Menu */}
            <div className="fixed z-30 top-0 left-0 w-full flex bg-white ">
              <div className="relative mt-16 mb-5 left-8 flex flex-col gap-8 ">
                {/* Mobile Menu links */}
                <ul className="flex flex-col gap-4 text-[#576a8a] ">
                  {navData.menuItems.map((item) => (
                    <React.Fragment key={item.id}>
                      <a
                        href={item.href}
                        className="block  font-medium hover:text-[#A1AAB7]"
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <li>{item.label}</li>
                      </a>
                    </React.Fragment>
                  ))}
                </ul>
                {/* <CallToActionButton
                  title="Get Started"
                  linkTo="/get-started"
                  otherClasses={`bg-white text-black w-max border ${hasScrolled ? "border-[#E3E3E3]" : "border-[#E3E3E3]"}  `} /> */}

                {/* <CallToActionButton
                  title="Login "
                  linkTo="/login"
                  otherClasses={`bg-white text-black w-max border ${hasScrolled ? "border-[#E3E3E3]" : "border-[#E3E3E3]"}  `} /> */}
                <Link
                  to="/login"
                  title="Log in "
                  className={` text-black w-max font-semibold flex items-center gap-2 `}
                >
                  Login{" "}
                  <span>
                    <IoPersonSharp />
                  </span>
                </Link>
                <Link
                  to="/signup"
                  title="Sign Up "
                  className={` text-black w-max font-semibold  flex items-center gap-2 `}
                >
                  Sign Up{" "}
                  <span>
                    <IoPersonAddSharp />
                  </span>
                </Link>
                {/* <div className="login-btns text-white w-[15%] font-bold flex items-center justify-between">
                     Login Button
                   <a className="flex items-end text-black justify-between" href="login">
                       <span className="text-xl block md:hidden">
                         <IoPersonSharp />
                       </span>

                       <span className="hidden md:block">Login</span>
                     </a>

                     Signup Button
                  <Link className="flex items-center  text-black  justify-between" to="/signup">
                       <span className="text-xl block md:hidden">
                         <IoPersonAddSharp />
                       </span>
                       <span className="hidden md:block">Sign Up</span>
                     </Link>
                   </div> */}
              </div>
            </div>
          </>
        )}
      </nav>
    </section>
    // <div className="flex justify-between items-center w-[90%] md:w-[80%] absolute top-0 py-8 px-2">
    //   {/* Logo */}

    //   <div className="logo flex items-center ">
    //     <img src={Logo} alt="Company Logo" className="h-12 rounded-md" />
    //   </div>
    //   {isMobile ? (
    //     <div>
    //       <IoMenu
    //         className="text-4xl cursor-pointer text-white"
    //         onClick={toggleMenu}
    //       />

    //       {isMenuOpen && (
    //         <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4">
    //           {navData.menuItems.map(({ href, label }) => (
    //             <a
    //               key={href}
    //               href={href}
    //               onClick={closeMenu}
    //               className="text-black  text-l hover:font-bold hover:bg-opacity-200 px-4 py-2 rounded"
    //             >
    //               {label}
    //             </a>
    //           ))}
    //         </nav>
    //       )}
    //     </div>
    //   ) : (
    //     <nav className="flex space-x-4 font-bold text-white">
    //       {navData.menuItems.map(({ href, label }) => (
    //         <a key={href} href={href}>
    //           {label}
    //         </a>
    //       ))}
    //     </nav>
    //   )}

    //   <div className="login-btns text-white w-[15%] font-bold flex items-center justify-between">
    //     {/* Login Button */}
    //     <a className="flex items-end justify-between" href="login">
    //       <span className="text-xl block md:hidden">
    //         <IoPersonSharp />
    //       </span>

    //       <span className="hidden md:block">Login</span>
    //     </a>

    //     {/* Signup Button */}
    //     <Link className="flex items-center justify-between" to="/signup">
    //       <span className="text-xl block md:hidden">
    //         <IoPersonAddSharp />
    //       </span>
    //       <span className="hidden md:block">Sign Up</span>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Navbar;
