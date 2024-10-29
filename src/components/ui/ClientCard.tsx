import React from "react";

interface ClientCardProps {
  logo: string; // or string if it's a URL for an image
}

const ClientCard: React.FC<ClientCardProps> = ({ logo }) => {
  return (
    <li className=" list-none">
      <div className="flex items-center p-4 h-36 justify-center ">
        <img src={logo} className=" w-[150px] h-[150px]" />
      </div>
    </li>
  );
};

export default ClientCard;
