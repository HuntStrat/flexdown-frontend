import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Navbar from './Navbar';
const Header: React.FC = () => {

  return (
    <header className="bg-real-estate-background relative h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center font-lexend ">
      {/* Navbar */}
    
        <Navbar />
  

      {/* Centered Content */}
      <div className="flex flex-col justify-start items-start text-greyy w-3/4">
      <h1 className="text-5xl text-logo font-bold mb-4">
    Beautiful <br /> homes made<br /> for you
  </h1>
        <span className="max-w-xl text-logo pr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui, nihil molestiae sequi voluptate illo esse mollitia commodi.
        </span>
      </div>

{/* End Content */}
<div className='bg-white w-3/4 h-16 flex items-center absolute bottom-0 px-4'>
  <a href="#all-listings" className='flex items-center font-bold text-logo' >See all listings <span className='ml-2'><FaArrowRight /></span></a>
</div>

    </header>
  );
};

export default Header;