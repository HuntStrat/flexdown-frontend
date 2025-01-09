import React, { useState } from 'react';

const BasicInformation = ({ onChange }: { onChange: (data: any) => void }) => {
  const [data, setData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };

  return (
    <div>
      <h2>Basic Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default BasicInformation;
