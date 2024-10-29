import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}
// Accordion
const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

// AccordionItem
const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent scrolling when pressing Space
      toggleOpen();
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow">
      <AccordionTrigger
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        isOpen={isOpen}
        title={title}
      />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
};

// AccordionTrigger
const AccordionTrigger: React.FC<{
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  title: string;
}> = ({ onClick, onKeyDown, isOpen, title }) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-expanded={isOpen}
      className={`flex justify-between items-baseline w-full p-4 text-left font-medium text-xl transition-colors duration-300 gap-4 ${
        isOpen ? "text-[#00173C]" : "text-[#00173C] hover:text-[#00173C]"
      }`}
      tabIndex={0} // Makes it focusable
    >
      <span>{title}</span>
      {isOpen ? <FaMinus /> : <FaPlus />}
    </button>
  );
};

// AccordionContent
const AccordionContent: React.FC<{
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ isOpen, children }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
      style={{ color: "#576a8a" }}
    >
      <div className="p-4">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
