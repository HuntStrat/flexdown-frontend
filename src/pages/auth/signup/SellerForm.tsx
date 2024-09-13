import React from 'react';

interface SellerFormProps {
  onSwitch: () => void;
}

const SellerForm: React.FC<SellerFormProps> = ({ onSwitch }) => {
  return (
    <div className="w-full h-[60vh] overflow-auto max-w-md bg-gray-100 md:ml-24 rounded-lg">
      <span
        className=" mb-8 flex justify-end cursor-pointer"
        onClick={onSwitch}
      >
        Sign Up as <span className='text-purple ml-2'> Buyer</span>
      </span>
      <form>
        <div className='flex'>
            <div className='flex'>
            <div className="mb-4">    
          <label className="block mb-2">First Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Surname</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
            </div>
      
        </div>
       
        <div className="mb-4">
          <label className="block mb-2">Your Email</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className='flex justify-center items-center'>
        <div className="mb-4">
          <label className="block mb-2">Ghana/ECOWAS Number</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
   
        <div className="">
          <label className="block mb-2">City</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
        
        <div className='flex'>
        <div className="mb-4">
          <label className="block mb-2">Mobile Number</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">WhatsApp Number</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
     
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className='flex'>
        <div className="mb-4">
          <label className="block mb-2">Agency Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">License Number</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
       
        <div className="mb-4">
          <label className="block mb-2">Bio</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Rating</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
    
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default SellerForm;
