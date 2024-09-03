
import React from 'react';
import Collegues from '../assets/images/collegues.jpg'
import { useWindowResize } from '@/utils/windowResize';

const GoodHands: React.FC = () => {
    const isMobile = useWindowResize();
  return (
    <div className={`w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-white`}>
    <div className="flex items-center w-full">
      <div className="w-1/2 h-full">
   
        <img
          src={Collegues}
          alt="Colleagues"
          className="h-full w-full object-cover rounded-tr-[20%] rounded-br-[20%]"
        />
      </div>

      <div className={`${isMobile ? 'w-2/3 pl-4' : 'w-1/3'} pl-16  pr-4 font-lexend text-logo`}>
        <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4`}>You're in good hands</h1>
        <span className='text-sm'>
         Flexdow is designed to make your search for a home effortless. Whether you're looking for a short-term rental, co-living space, or a new roomate, we've removed the traditional hassles of real estate. Our platform connects you directly with propery owners and fellow renters, so you can skip the middleman and avoid costly agent fees. With our user-friendly tools, expert guidance, and community-focused approach, finding your next living arrangment has never been easier or more afforbale!.
        </span>
      </div>
    </div>
  </div>
  );
};

export default GoodHands;