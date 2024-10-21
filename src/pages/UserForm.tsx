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
  image: File | null;
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
    image: null,
  });
  const [loading, setLoading] = useState(false);
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
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file, // Save the file in the state
      }));
    }
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure image is included in the form data
    const formDataToSend = new FormData() ;

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'image' && value) {
        formDataToSend.append(key, value); // Append file
      } else {
        formDataToSend.append(key, String(value)); // Append other fields as strings
      }
    });
    try {
      setLoading(true);

      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwdEBnbWFpbC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWQiOjIxLCJpYXQiOjE3Mjk1NDc1MjAsImV4cCI6MTcyOTYzMzkyMH0.-i__Tyai7COkBoLZS4b48dvTt3fdVr5pQ08RlLHn0Pk'
      console.log('Retrieved token:', token);
      const response = await fetch('https://flexdown.fly.dev/api/v1/property/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();
      console.log('Property created:', data);
      setLoading(false);
      if (data.status === 'error') {
        console.error('Error:', data.message);
      } else {
        // Handle successful property creation
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
    }
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
            <select
              name="sale_type"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              
              <option value="comercial">comercial</option>
              <option value="condos">condos</option>
              <option value="studios">studios</option>
              <option value="single homes">single homes</option>
              <option value="residental">residental</option>
              <option value="apartment">apartment</option>
             
            </select>

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
     
              <option value="for sale">for sale</option>
              <option value="for rent">for rent</option>
              <option value="rent to own">rent to own</option>
              <option value="short term">short term</option>
             
            </select>
          </div>

          {/* Other fields */}
          {/* Repeat similar structure for other inputs */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Status</label>
            <select
              name="sale_type"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
         
              <option value="open house">open house</option>
              <option value="active">active</option>
              <option value="sold">sold</option>
             
             
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Payment Plan</label>
            <select
              name="sale_type"
              value={formData.payment_plan}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
           
              <option value="monthly">monthly </option>
              <option value="yearly">yearly</option>
              <option value="not applicable">not applicable</option>
              <option value="one time">one time</option>
             
             
            </select>
          </div>


          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium">Mode of Payment</label>
            <select
              name="sale_type"
              value={formData.mode_of_payment}
              onChange={handleChange}
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              
              <option value="cash">cash </option>
              <option value="card">card</option>
              <option value="not applicable">not applicable</option>
              <option value="bank transfer">bank transfer</option>
             
             
            </select>
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

{formData.image && (
  <div className='flex flex-col mb-2'>
    <label className="text-sm font-medium">Images</label>
    <img src={URL.createObjectURL(formData.image)} alt="Uploaded" className="w-64 h-64 object-cover" />
  </div>
)}
         
        </div>
        <div className="flex justify-center p-4 w-full">
          <button
           
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-black text-white py-3 px-4 rounded-xl hover:bg-indigo-700"
          >
           
            {loading ? 'Submitting...' : 'Submit Listing'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
