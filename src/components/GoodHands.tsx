
import React from 'react';
import Collegues from '../assets/images/collegues.jpg'
import { useWindowResize } from '@/utils/windowResize';

const GoodHands: React.FC = () => {
    const isMobile = useWindowResize();
  return (
    <div className={`w-full h-[50vh] md:h-[80vh] flex items-center justify-center bg-white`}>
    <div className="flex items-center w-full">
      <div className="w-1/2 h-full">
        {/* Styling for the image with specific border radius */}
        <img
          src={Collegues}
          alt="Colleagues"
          className="h-full w-full object-cover rounded-tr-[20%] rounded-br-[20%]"
        />
      </div>

      <div className={`${isMobile ? 'w-2/3 pl-4' : 'w-1/3'} pl-16  pr-4 font-lexend text-logo`}>
        <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4`}>You're in good hands</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          deleniti voluptatibus aliquid ullam pariatur nisi vitae. Atque omnis
          perferendis ipsum. Sed blanditiis suscipit distinctio aspernatur dicta
          laborum sit quod pariatur!
        </span>
      </div>
    </div>
  </div>
  );
};

export default GoodHands;