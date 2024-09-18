import React from 'react';
import { SiVorondesign } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";


const Features: React.FC = () => {

  return (
    <div className={`flex flex-col md:flex-row mt-8 py-8 items-center justify-around bg-blue-400 font-lexend`}>
 
      <div className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between  `}>
        <div>
        <SiVorondesign className="text-lg text-logo" />
        </div>
        <div className='px-8'>
          <h2 className='text-2xl text-logo font-bold mb-2'>Design</h2>
          <p className='text-sm'>FlexDown's platform is simple and easy to use. Whether listing, searching, or a managing rentals, our interface guides you smoothly. With helpful suggestions and quick access to key info, finding the right place is easy...</p>
        </div>
      </div>

      <div className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between`}>
        <div>
        <BsGraphUpArrow className="text-2xl text-logo" />
        </div>
        <div className='px-8'>
        <h2 className='text-2xl text-logo font-bold mb-2'>Strategy</h2>
          <p className='text-sm'>FlexDown is build to make finding flexible and afforbale living arrangements easy. We eliminate the hassle of traditional real estate, offering tools and AI-driven solutions, and real-time statistics to help you make quick, informed decisions.</p>
        </div>
      </div>

      <div className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between`}>
        <div>
        <IoIosRocket className="text-2xl text-logo"  />
        </div>
        <div className='px-8'>
            <h2 className='text-2xl text-logo font-bold mb-2'>Marketing</h2>
          <p className='text-sm' >We focus on reaching you where it counts- trough targeted ads, social media, and strategic partherships. Our goal is to connect you with the right housing options while educating you on the process.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
