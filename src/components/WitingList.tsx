import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WaitingList: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      // Show success message
      setShowSuccess(true);

      // Redirect after a short delay
      setTimeout(() => {
        navigate('/signup');
      }, 2000);
    }
  };

  return (
    <div className="w-full h-[40vh] px-4 mb-8 md:px-0 md:h-[50vh] flex items-center justify-around md:flex-row font-lexend bg-white">
      <div className="h-[40vh] flex flex-col items-center">
        <div>
          <h1 className="text-3xl md:text-4xl m-8 font-bold">
            Special Perks for the First <span className="text-purple font-sans">200 Buyers and Sellers!</span>
          </h1>
        </div>
        <div className="h-[15vh] flex flex-col items-center justify-between w-full mb-4">
          <input
            className="w-[70%] md:w-[38%] mb-8 p-2 border-2 rounded-md focus:border-purple-500"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-16 md:px-16 drop-shadow-xl md:mb-16"
            onClick={handleSubmit}
          >
            Join the Waiting List
          </button>
        </div>
 
        {showSuccess && (
          <div className="mt-8 text-black font-lexend font-bold">
            Successfully joined the waiting list! Redirecting to signup...
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitingList;
