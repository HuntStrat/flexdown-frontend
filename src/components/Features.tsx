import React from 'react';
import { SiVorondesign } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { useWindowResize } from '@/utils/windowResize';

const Features: React.FC = () => {
    const isMobile = useWindowResize();
  return (
    <div className={`w-full h-auto flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-around bg-white font-lexend`}>
 
      <div className={`flex ${isMobile ? 'w-[80%] pb-8' : 'w-[30%]'} flex-row items-start justify-between`}>
        <div>
        <SiVorondesign className="text-2xl text-logo" />
        </div>
        <div className='px-8'>
          <h2 className='text-2xl text-logo font-bold mb-2'>Design</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias quod reiciendis vero eius odit! Laboriosam enim, itaque amet corrupti accusantium facilis quibusdam quam reiciendis, eius nihil velit, quae molestias.</p>
        </div>
      </div>

      <div className={`flex ${isMobile ? 'w-[80%] pb-8' : 'w-[30%]'} flex-row items-start justify-between`}>
        <div>
        <BsGraphUpArrow className="text-2xl text-logo" />
        </div>
        <div className='px-8'>
        <h2 className='text-2xl text-logo font-bold mb-2'>Strategy</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias quod reiciendis vero eius odit! Laboriosam enim, itaque amet corrupti accusantium facilis quibusdam quam reiciendis, eius nihil velit, quae molestias.</p>
        </div>
      </div>

      <div className={`flex ${isMobile ? 'w-[80%] pb-8' : 'w-[30%]'} flex-row items-start justify-between`}>
        <div>
        <IoIosRocket className="text-2xl text-logo"  />
        </div>
        <div className='px-8'>
            <h2 className='text-2xl text-logo font-bold mb-2'>Marketing</h2>
          <p className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias quod reiciendis vero eius odit! Laboriosam enim, itaque amet corrupti accusantium facilis quibusdam quam reiciendis, eius nihil velit, quae molestias.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
