import React, { useEffect, useState } from 'react';

const WelcomeUser: React.FC = () => {
  const [user, setUser] = useState<{ surname?: string; role?: string }>({}); 

  useEffect(() => {
  
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

   
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        Welcome {user.surname || 'User'} {user.role ? `(${user.role})` : ''}!
      </h1>
      <p className="mt-4">Thank you for logging in.</p>
    </div>
  );
};

export default WelcomeUser;