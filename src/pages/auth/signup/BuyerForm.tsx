import React, { useState } from 'react';


interface BuyerFormProps {
  onSwitch: () => void;
}

const BuyerForm: React.FC<BuyerFormProps> = ({ onSwitch }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    ecowasNumber: '',
    city: '',
    mobileNumber: '',
    whatsappNumber: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://flexdown.fly.dev/buyer/buyer/pub',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        }
      );

      if (!response.ok) {
        throw new Error('Failed to register seller');
      }

      const data = await response.json();
      console.log('Seller registration successful:', data);
    } catch (err: any) {
      console.error('Error during registration:', err);
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false); 
    }
  };
  return (
    <div className="w-[100%] h-[60vh] overflow-auto max-w-md bg-gray-100 rounded-lg">
      <a
        className="font-bold mb-8 flex justify-end cursor-pointer"
        onClick={onSwitch}
      >
        Sign Up as <span className="text-purple ml-2">Seller</span>
      </a>
      <form className='font-bold' onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block mb-2">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ghana/ECOWAS Number</label>
          <input
            type="text"
            name="ecowasNumber"
            value={formData.ecowasNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block mb-2">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`rounded-lg bg-black hover:bg-purple font-lexend text-white p-4 px-32 md:px-24 drop-shadow-xl md:mb-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </form>
    </div>
  );
};

export default BuyerForm;
