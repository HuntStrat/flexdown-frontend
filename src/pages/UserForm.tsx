import React, { useState } from 'react';
import { uploadImageToCloudinary } from '../lib/cloudinary';

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
  images: string | null;
}

const PropertyForm: React.FC = () => {
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
    images: null,
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file change for images
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      try {
        const uploadedImage = await uploadImageToCloudinary(file);
        setFormData((prevState) => ({
          ...prevState,
          images: uploadedImage.secure_url, // Store the Cloudinary image URL
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Log the form data to the console
    console.log('Form Data:', formData);
  
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value.toString());
    });

    // Example API request (replace URL with your actual API endpoint)
    fetch(`https://api.cloudinary.com/v1_1/dqiznt9zd/image/upload`, {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => console.log('Property created:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="w-full p-4 font-lexend bg-light-gray flex flex-col justify-between items-start">
      <div className="p-4">
        <h1 className="font-bold text-2xl">Create a listing</h1>
      </div>
      <form onSubmit={handleSubmit} className="p-4 w-[100%]">
        <div className="w-[80%]">
          {/* Category */}
          <div className="flex flex-col mb-2 ">
            <label className="text-sm font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Sale Type */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Sale Type</label>
            <select
              name="sale_type"
              value={formData.sale_type}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Sale Type</option>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Other fields */}
          {/* Repeat similar structure for other inputs */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Payment Plan</label>
            <input
              type="text"
              name="payment_plan"
              value={formData.payment_plan}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Bathrooms */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Square Feet */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Square Feet</label>
            <input
              type="number"
              name="square_feet"
              value={formData.square_feet}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={3}
            />
          </div>

          {/* Images */}
        
          <div className='flex flex-col mb-2'>
  <label className="text-sm font-medium">Upload Image</label>
  <input
    type="file"
    onChange={handleFileChange}
    className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

{formData.images && (
  <div className='flex flex-col mb-2'>
    <label className="text-sm font-medium">Images</label>
    <img src={formData.images} alt="Uploaded" className="w-64 h-64 object-cover" />
  </div>
)}
         
        </div>
        <div className="flex justify-center p-4 w-full">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full mt-4 bg-black text-white py-3 px-4 rounded-xl hover:bg-indigo-700"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
