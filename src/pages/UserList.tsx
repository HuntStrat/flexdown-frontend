import React, { useEffect, useState } from 'react';

interface Property {
  id:number;
  category: string;
  sale_type: string;
  status: string;
  payment_plan: string;
  mode_of_payment: string;
  address: string;
  agency: string;
  amenities: string[];
  bathrooms: number;
  bedrooms: number;
  city: string;
  description: string;
  postal_code: string;
  price: number;
  secure_url: string[];
  square_feet: number;
  title: string;
}



const UserList: React.FC = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch('https://lockedin-flexdown.fly.dev/api/v1/property/dashboard/3', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmF0YXNoZXZza2FlbWlsaWphQGdtYWlsLmNvbSIsInJvbGUiOiJzZWxsZXIiLCJpZCI6MywiaWF0IjoxNzM2NDI4OTE4LCJleHAiOjE3MzY1MTUzMTh9.vUCF4N3Bp4CDZd8NIY_sFRqxxFkJmHk3gVEQyu574Rg',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
    
        // Set only the first property (if available)
        if (result.data && result.data.length > 0) {
          setProperty(result.data[0]);
        }
    
      } catch (error) {
        console.error('Error fetching property data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!property) return <div className="error-message">No property data found.</div>;

  return (
    <div className="property-card">
      <h2>{property.title}</h2>
      <p>{property.description}</p>

      {Object.keys(property).map((key) => {
    
        const value = property[key as keyof Property];

        return (
          <div key={key}>
            <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
          </div>
        );
      })}

      <div className="property-images">
        {property.secure_url.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Property Image ${index + 1}`}
            className="property-image"
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;