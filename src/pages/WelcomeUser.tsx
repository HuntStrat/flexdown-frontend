import React, { useEffect, useState } from 'react';

type ImageData = {
  id: number;
  url: string;
};

type PropertyData = {
  id: number;
  status: string;
  sale_type: string;
  category: string;
  price: string;
  address: string;
  images: ImageData[];
};

const WelcomeUser: React.FC = () => {
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // State for the form inputs
  const [formData, setFormData] = useState({
    status: '',
    saleType: '',
    category: '',
    price: '',
    address: '',
    images: [] as string[], // Assuming images will be an array of URLs
  });

  const fetchPropertyData = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token:", token);
      
      const requestBody = {
        status: formData.status,
        sale_type: formData.saleType,
        category: formData.category,
        price: formData.price,
        address: formData.address,
        images: formData.images.map(url => ({ url }))
      };
  
      console.log("Request Body:", JSON.stringify(requestBody)); // Log the request body
  
      const response = await fetch('https://flexdown.fly.dev/api/v1/property/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setPropertyData(data.data.property); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching property data:", error);
      setPropertyData(null); 
      setLoading(false);
    }
  };


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prevData => ({
        ...prevData,
        images: urls,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPropertyData();
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  return (
    <div className='w-full h-screen flex flex-col justify-start align-center p-4 font-lexend'>
      <div className='h-[5vh] mb-8 flex justify-between items-center'>
        <h1>Welcome Seller</h1>
        <button className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600'>Create New List +</button>
      </div>

      

      <div className='flex flex-wrap justify-around'>
        {loading ? (
          <p>Loading...</p>
        ) : propertyData ? (
          <div className='w-[30%] border border-black rounded-md flex flex-col justify-around mb-4 p-2'>
            {propertyData.images.length > 0 && (
              <img
                className='w-[100%] rounded-md top-0 border-t-black mb-2'
                src={propertyData.images[0].url} // Using the URL from the response
                alt="Property"
              />
            )}
            <p>Status: {propertyData.status}</p>
            <p>Sale Type: {propertyData.sale_type}</p>
            <p>Category: {propertyData.category}</p>
            <p>Price: {propertyData.price}</p>
            <p>Address: {propertyData.address}</p>
          </div>
        ) : (
          <p>No property data available.</p>
        )}
      </div>
    </div>
  );
};

export default WelcomeUser;
