import React, { useState } from 'react';

const PropertyDetails = ({ onChange }: { onChange: (data: any) => void }) => {
  const [data, setData] = useState({ address: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };

  return (
    <div>
      <h2>Property Details</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={data.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={data.type}
        onChange={handleChange}
      />
    </div>
  );
};

export default PropertyDetails;
