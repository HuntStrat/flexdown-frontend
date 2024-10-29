import React from "react";

interface NavButtonProps {
  title: string;
  color?: string;
  bgcolor?: string;
  icon: React.ReactNode;
  otherClasses: string;
  customFunc: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  title,
  color,
  bgcolor,
  icon,
  otherClasses,
  customFunc,
}) => {
  return (
    <button
      onClick={customFunc}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-opacity duration-3000 ease-in-out
                  ${bgcolor ? `bg-[${bgcolor}]` : ""} 
                  ${color ? `text-[${color}]` : "text-black"} 
                  hover:shadow-lg focus:outline-none ${otherClasses}`}
      style={{ backgroundColor: bgcolor }}
    >
      <span className="transition-transform duration-3000 ease-in-out">
        {icon}
      </span>
      <span>{title}</span>
    </button>
  );
};

export default NavButton;
