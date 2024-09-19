import React from 'react';
import Image from '../../assets/images/signup.jpg'
import { useState } from 'react';
import BuyerForm from './signup/BuyerForm';
import SellerForm from './signup/SellerForm';
const SignUp: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<'buyer' | 'seller' | null>(null);


  const handleBuyerClick = () => {
    setSelectedForm('buyer');
  };

  const handleSellerClick = () => {
    setSelectedForm('seller');
  };

  const handleSwitchToBuyer = () => {
    setSelectedForm('buyer');
  };

  const handleSwitchToSeller = () => {
    setSelectedForm('seller');
  };
  return (
    <div className='h-screen w-full p-4 flex justify-between items-center font-lexend'>
      <div className='w-full md:w-1/2 h-[90vh] flex flex-col items-center justify-around'>
        <div className='w-[100%] h-[100vh] md:w-[100%] flex flex-col justify-around items-center'>
          <div className='mb-2'>
          <h1 className='text-3xl font-bold text-center'>  {selectedForm === 'buyer' ? 'Register As Buyer' : selectedForm === 'seller' ? 'Register As Seller' : 'Register As'}</h1>
          </div>
          
          {!selectedForm ? (
            <div className="w-[100%]  h-[20vh] flex flex-col md:flex-row items-center justify-around">
              <button
                onClick={handleBuyerClick}
                className="rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-32 md:px-24 drop-shadow-xl md:mb-8"
              >
                Buyer
              </button>
              <button
                onClick={handleSellerClick}
                className="rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-32 md:px-24 drop-shadow-xl md:mb-8"
              >
                Seller
              </button>
            </div>

            
          ) : selectedForm === 'buyer' ? (
            <BuyerForm  onSwitch={handleSwitchToSeller} /> 
          ) : (
            <SellerForm onSwitch={handleSwitchToBuyer}/> 
          )}

<div className='mt-8 text-center'>
                <a href='/login'>Already have an account ? <span className='underline text-purple font-bold'>Login</span></a>
              </div>
         
        </div>

        
      </div>

  

      <div className='hidden w-0 md:block md:w-1/2'>
        <div className='p-4 bg-white'>
          <img src={Image} alt='Sign Up' className='w-full h-auto rounded-lg' />
        </div>
      </div>
</div>
  );
};


export default SignUp;