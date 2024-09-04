
import React from 'react';



const WaitingList: React.FC = () => {

  return (
    <div className={`w-full h-[40vh] px-4 md:px-0 md:h-[50vh] flex flex-col items-center justify-around md:flex-row md: font-lexend bg-white`}>
      <div className=''>
      <h1 className='text-3xl md:text-4xl mt-8 font-bold'>Special Perks for the First <span className='text-purple font-sans'>200 Buyers and Sellers!</span></h1>
      </div>
    <div className='h-[15vh] flex flex-col items-center justify-between w-full'>
    <input className='w-[90%] md:w-[48%] p-2 border-2 rounded-md focus:border-purple-500' type="email" placeholder='Enter your email' />

<button className='rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-16 md:px-16 drop-shadow-xl md:mb-16'>Join the Waiting List</button>
    </div>

  </div>
  );
};

export default WaitingList;