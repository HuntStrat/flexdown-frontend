import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {

  return (
    <header className="bg-black relative h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center font-lexend ">
    
    
        <Navbar />
  

 
      <div className='w-3/4'>
      <div className="flex flex-col justify-start items-start text-greyy">
      <h1 className={`text-4xl md:text-5xl text-white font-bold mb-4`}>
    Connecting <br /><span className='text-purple'> You to Flexible</span><br /> Living Solutions
  </h1>
  </div>

  <div className=' mt-8 h-[10vh]'>
  <h2 className="text-3xl text-white font-lexend pr-16">
  Keep your sales team on top of every opportunity. FlexDown CRM 🔥
  (Sync your listings with FlexDown chnages to this )
        </h2>
        <p className='text-white mt-2'>Flexible, Affordable, and Hassle-Free Living Solutions at Your Fingertips</p>
    
  </div>
      </div>
     
   

    </header>
  );
};

export default Header;