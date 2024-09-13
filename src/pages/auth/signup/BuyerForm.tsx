import React from 'react';

interface BuyerFormProps {
  onSwitch: () => void;
}

const BuyerForm: React.FC<BuyerFormProps> = ({ onSwitch }) => {
  return (
    <div className="w-full h-[60vh] overflow-auto max-w-md bg-gray-100 md:ml-24  rounded-lg">
      <a
        className="font-bold mb-8 flex justify-end cursor-pointer"
        onClick={onSwitch}
      >
        Sign Up as <span className='text-purple ml-2'> Seller</span>
      </a>
      <form className=''>
        <div className='flex'>
        <div className="mb-4">
          <label className="block mb-2">Surname</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">First Name</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ghana/ECOWAS Number</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className='flex'>
        <div className="mb-4">
          <label className="block mb-2">Mobile Number</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">WhatsApp Number</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        </div>
       
        <div className="mb-4">
          <label className="block mb-2">City</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        {/* Additional fields for Buyer */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default BuyerForm;
