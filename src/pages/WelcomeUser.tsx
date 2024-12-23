import React, { useState } from 'react';
import Image from '../assets/images/collegues.jpg';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


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
  liked? : boolean;
};

const WelcomeUser: React.FC = () => {
  // Array of mock property data for styling
  const mockPropertyData: PropertyData[] = [
    {
      id: 1,
      status: 'Available',
      sale_type: 'For Sale',
      category: 'Apartment',
      price: '$200,000',
      address: '123 Main St, Springfield',
      images: [{ id: 1, url: Image }],
      liked: false,
    },
    {
      id: 2,
      status: 'Sold',
      sale_type: 'For Rent',
      category: 'House',
      price: '$1,500/mo',
      address: '456 Elm St, Shelbyville',
      images: [{ id: 2, url: Image }],
      liked: true,
    },
    {
      id: 3,
      status: 'Available',
      sale_type: 'For Sale',
      category: 'Condo',
      price: '$350,000',
      address: '789 Oak St, Capital City',
      images: [{ id: 3, url: Image }],
    },
    {
      id: 4,
      status: 'Pending',
      sale_type: 'For Sale',
      category: 'Townhouse',
      price: '$275,000',
      address: '101 Maple St, Ogdenville',
      images: [{ id: 4, url: Image }],
    },
    {
      id: 5,
      status: 'Available',
      sale_type: 'For Rent',
      category: 'Studio',
      price: '$800/mo',
      address: '202 Pine St, North Haverbrook',
      images: [{ id: 5, url: Image }],
    },
    {
      id: 6,
      status: 'Sold',
      sale_type: 'For Sale',
      category: 'Villa',
      price: '$1,200,000',
      address: '303 Birch St, Cypress Creek',
      images: [{ id: 6, url: Image }],
    },
  ];





  const [propertyData, setPropertyData] = useState<PropertyData[]>(mockPropertyData);
  // Function to toggle "like" state for a property
  const toggleLike = (propertyId: number) => {
    setPropertyData((prevData) =>
      prevData.map((property) =>
        property.id === propertyId
          ? { ...property, liked: !property.liked }
          : property
      )
    );
  };

  return (
    <div className='w-full h-screen flex flex-col justify-start align-center p-4 font-lexend'>
      <div className='h-[5vh] mb-8 flex justify-between items-center'>
        <h1>Welcome Seller</h1>
        <button className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600'>Create New List +</button>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-around mt-8">
        {propertyData.length > 0 ? (
          propertyData.map((property) => (
            <div
              key={property.id}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] text-sm flex flex-col justify-around mb-4 p-2"
            >
              <div className="relative">
                {property.images.length > 0 && (
                  <img
                    className="w-full rounded-md border border-black mb-2"
                    src={property.images[0].url}
                    alt="Property"
                  />
                )}
             {property.liked ? (
                  < FaHeart
                    onClick={() => toggleLike(property.id)}
                    className="absolute top-2 right-2 text-xl cursor-pointer text-red-500"
                  />
                ) : (
                  <FaRegHeart
                    onClick={() => toggleLike(property.id)}
                    className="absolute top-2 right-2 text-xl cursor-pointer text-gray-600"
                  />
                )}
              </div>
              <p className='text-xs'>{property.status}</p>
              <p className='text-xs'>{property.sale_type}</p>
              <p className='text-xs'>{property.category}</p>
              <p className='text-xs'>{property.address}</p>
              <p className="font-bold">{property.price} sq.ft.</p>
            </div>
          ))
        ) : (
          <p>No property data available.</p>
        )}
      </div>
    </div>
  );
};

export default WelcomeUser;









// import React, { useEffect, useState } from 'react';

// type ImageData = {
//   id: number;
//   url: string;
// };

// type PropertyData = {
//   id: number;
//   status: string;
//   sale_type: string;
//   category: string;
//   price: string;
//   address: string;
//   images: ImageData[];
// };

// const WelcomeUser: React.FC = () => {
//   const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
//   const [loading, setLoading] = useState(true);
  
//   // State for the form inputs
//   const [formData, setFormData] = useState({
//     status: '',
//     saleType: '',
//     category: '',
//     price: '',
//     address: '',
//     images: [] as string[], // Assuming images will be an array of URLs
//   });

//   const fetchPropertyData = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log("Token:", token);
      
//       const requestBody = {
//         status: formData.status,
//         sale_type: formData.saleType,
//         category: formData.category,
//         price: formData.price,
//         address: formData.address,
//         images: formData.images.map(url => ({ url }))
//       };
  
//       console.log("Request Body:", JSON.stringify(requestBody)); // Log the request body
  
//       const response = await fetch('https://lockedin-flexdown.fly.dev/api/v1/property/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify(requestBody)
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       setPropertyData(data.data.property); 
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching property data:", error);
//       setPropertyData(null); 
//       setLoading(false);
//     }
//   };


//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       const urls = Array.from(files).map(file => URL.createObjectURL(file));
//       setFormData(prevData => ({
//         ...prevData,
//         images: urls,
//       }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     fetchPropertyData();
//   };

//   useEffect(() => {
//     fetchPropertyData();
//   }, []);

//   return (
//     <div className='w-full h-screen flex flex-col justify-start align-center p-4 font-lexend'>
//       <div className='h-[5vh] mb-8 flex justify-between items-center'>
//         <h1>Welcome Seller</h1>
//         <button className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600'>Create New List +</button>
//       </div>

      

//       <div className='flex flex-wrap justify-around'>
//         {loading ? (
//           <p>Loading...</p>
//         ) : propertyData ? (
//           <div className='w-[30%] border border-black rounded-md flex flex-col justify-around mb-4 p-2'>
//             {propertyData.images.length > 0 && (
//               <img
//                 className='w-[100%] rounded-md top-0 border-t-black mb-2'
//                 src={propertyData.images[0].url} // Using the URL from the response
//                 alt="Property"
//               />
//             )}
//             <p>Status: {propertyData.status}</p>
//             <p>Sale Type: {propertyData.sale_type}</p>
//             <p>Category: {propertyData.category}</p>
//             <p>Price: {propertyData.price}</p>
//             <p>Address: {propertyData.address}</p>
//           </div>
//         ) : (
//           <p>No property data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WelcomeUser;
