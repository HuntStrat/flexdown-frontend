import React from "react";

import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [text, setText] = useState("Sync your listings with FlexDown 🔥");
  const messages = [
    "Keep your sales team on top of every opportunity. FlexDown CRM 🔥",
    "Sync your listings with FlexDown 🔥",
  ];

  let messageIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setText(messages[messageIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-header-banner before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-header-Overlay relative w-full h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center font-lexend px-2 ">
      <div className="w-[85%] md:w-[80%] px-2 z-10">
        <div className="flex flex-col justify-start items-start text-greyy">
          <h1 className={`text-4xl md:text-5xl text-white font-bold mb-4`}>
            Connecting <br />
            <span className="animate-color-cycle"> You to Flexible</span>
            <br /> Living Solutions
          </h1>
        </div>

        <div className=" mt-8 h-[10vh]">
          <h2 className="text-2xl lg:text-3xl text-white font-lexend pr-8">
            {text}
          </h2>
          <p className="text-white mt-2">
            Flexible, Affordable, and Hassle-Free Living Solutions at Your
            Fingertips
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
