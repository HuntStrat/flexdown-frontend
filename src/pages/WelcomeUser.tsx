import React, { useState, useEffect } from 'react';
import { PropertyData } from '../utils/createdList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image from '../assets/images/collegues.jpg';

const WelcomeUser: React.FC = () => {
  const [propertyData, setPropertyData] = useState<PropertyData[]>([]); // Change to an array
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API response with multiple properties
      const data: PropertyData[] = [
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "Rent To Own",
              category: "Commercial",
              price: 764000,
              address: "179 yango st",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/grlttssa0bcaqigtvf7m.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "For Sale",
              category: "Residential",
              price: 500000,
              address: "123 Main St",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/example1.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
        // Add 4 more properties with unique data
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "Rent",
              category: "Apartment",
              price: 300000,
              address: "456 Elm St",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/example2.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "Rent To Own",
              category: "Commercial",
              price: 800000,
              address: "789 Oak St",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/example3.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "For Rent",
              category: "Office",
              price: 400000,
              address: "101 Pine St",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/example4.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
        {
          status: "success",
          message: "Property created with images uploaded successfully",
          data: {
            property: {
              sale_type: "For Sale",
              category: "Villa",
              price: 900000,
              address: "202 Maple St",
              images: [
                {
                  uri: "https://res.cloudinary.com/dbqczgoti/image/upload/v1729786308/image/example5.jpg",
                  is_base_image: true,
                },
              ],
            },
          },
        },
      ];

      setPropertyData(data); // Set the property data
    };

    fetchData();
  }, []);

  const handleBack = () => {
    navigate('/userform'); // Adjust the path as needed
  };

  return (
    <div className='w-full h-screen flex flex-col justify-start align-center p-4 font-lexend'>
      <div className='h-[5vh] mb-8 flex justify-between items-center'>
        <h1>Welcome Seller</h1>
        <button 
          className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600' 
          onClick={handleBack} // Call handleBack on click
        >
         Create New List +
        </button>
      </div>

      <div className='flex flex-wrap  justify-around'>
        {propertyData.map((property, index) => (
          <div key={index} className='w-[30%] border border-black rounded-md flex flex-col justify-around mb-4 p-2'>
            <img className='w-[100%] rounded-md top-0 border-t-black mb-2' src={image} alt="Property" />
            <p>Status: {property.status}</p>
            <p>Sale Type: {property.data.property.sale_type}</p>
            <p>Category: {property.data.property.category}</p>
            <p>Price: {property.data.property.price}</p>
            <p>Address: {property.data.property.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeUser;
