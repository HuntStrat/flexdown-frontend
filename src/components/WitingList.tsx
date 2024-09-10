
import React from 'react';



const WaitingList: React.FC = () => {

  return (
    <div className={`w-full h-[40vh] px-8 md:px-0 md:h-[50vh] flex flex-col items-center justify-around font-lexend bg-white`}>
        <h1 className='text-xl md:text-1xl mt-8 font-bold'>Special Offer for the First 200 users 🏠 🏡.</h1>
   <input className='w-[90%] md:w-[25%] p-2 border-2 rounded-md focus:border-purple-500' type="email" placeholder='Enter your email' />

   <button className='rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 md:px-16 drop-shadow-xl md:mb-16'>Join the Waiting List</button>
  </div>
  );
};

export default WaitingList;