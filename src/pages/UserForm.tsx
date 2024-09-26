// PropertyForm.tsx
import React, { useState } from 'react';

// Define the type for the form data
interface PropertyFormData {
  category: string;
  sale_type: string;
  status: string;
  payment_plan: string;
  mode_of_payment: string;
  title: string;
  address: string;
  agency: string;
  city: string;
  state: string;
  postal_code: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  description: string;
  images: File | null;
}

const PropertyForm: React.FC = () => {
  // Initialize form state
  const [formData, setFormData] = useState<PropertyFormData>({
    category: '',
    sale_type: '',
    status: '',
    payment_plan: '',
    mode_of_payment: '',
    title: '',
    address: '',
    agency: '',
    city: '',
    state: '',
    postal_code: '',
    price: '',
    bedrooms: 0,
    bathrooms: 0,
    square_feet: 0,
    description: '',
    images: null
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file change for images
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prevState => ({
        ...prevState,
        images: e.target.files[0]
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Example API request (replace URL with your actual API endpoint)
    fetch('https://your-api-url/property/create', {
      method: 'POST',
      body: formDataToSend
    })
      .then(response => response.json())
      .then(data => console.log('Property created:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='w-full p-4 font-lexend'>
         <div className='mb-8 p-4'>
          <h1 className="font-medium">Add your listing</h1>
        
        </div>
 <form onSubmit={handleSubmit} className="p-4 ">
      <div className="">

   
<div>

</div>
        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-[50%] p-2 rounded-md shadow-sm border-gray-300 text-black-500 focus:border-black focus:text-black focus:ring-0 sm:text-sm"
          />
        </div>

        {/* Sale Type */}
        <div className='flex flex-col'>
          <label className=" text-sm font-medium">Sale Type</label>
          <input
            type="text"
            name="sale_type"
            value={formData.sale_type}
            onChange={handleChange}
            className="mt-1 w-[50%] p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Other fields */}
        {/* Repeat similar structure for other inputs */}
        <div>
          <label className=" text-sm font-medium">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className=" text-sm font-medium">Payment Plan</label>
          <input
            type="text"
            name="payment_plan"
            value={formData.payment_plan}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Add more fields here */}
        {/* Mode of Payment, Title, Address, etc. */}

        <div>
          <label className=" text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className=" text-sm font-medium">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="mt-1  w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Bathrooms */}
        <div>
          <label className=" text-sm font-medium">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Square Feet */}
        <div>
          <label className=" text-sm font-medium">Square Feet</label>
          <input
            type="number"
            name="square_feet"
            value={formData.square_feet}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className=" text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>

        {/* Images */}
        <div className="col-span-2">
          <label className=" text-sm font-medium">Images</label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm"
            accept="image/*"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-[40%] bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Submit Listing
      </button>
    </form>
    </div>
   
  );
};

export default PropertyForm;
