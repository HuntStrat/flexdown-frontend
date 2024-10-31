import React from "react";
import CtaButton from "./ui/CtaButton";
import HeroCopy from "./ui/HeroCopy";
// import Navbar from "./Navbar";
// import { useState, useEffect } from "react";

const Header: React.FC = () => {
  // const [text, setText] = useState("Sync your listings with FlexDown 🔥");
  // const messages = [
  //   "Keep your sales team on top of every opportunity. FlexDown CRM 🔥",
  //   "Sync your listings with FlexDown 🔥",
  // ];

  // let messageIndex = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     messageIndex = (messageIndex + 1) % messages.length;
  //     setText(messages[messageIndex]);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="hero-section flex flex-col bg-gradient-to-bl from-[#87CCFF] to-white py-4 pb-12 ">
      <div className="hero-container flex flex-col xl:flex-row mt-24 gap-5 overflow-hidden px-4 xl:pl-12 items-center">
        <div className="copy-with-btns flex flex-col lg:w-fit ">
          <HeroCopy />

          <div className="flex gap-4 mt-8 mx-auto xl:mx-0">
            <CtaButton
              title="Get Started Now"
              linkTo="/get-started"
              otherClasses="text-white bg-[#3b81f4] w-max "
            />

            <CtaButton
              title="Learn more"
              linkTo="/learn-more"
              otherClasses="text-black bg-white w-max"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="hero-image w-full overflow-visible relative"
        >
          <img src="/hero-image.png" alt="" className="h-auto p-4 " />
        </div>
      </div>
    </section>
    // <header className="bg-black relative w-full h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center font-lexend px-2 ">
    //   {/* <Navbar /> */}

    //   <div className="w-[85%] md:w-[80%] px-2">
    //     <div className="flex flex-col justify-start items-start text-greyy">
    //       <h1 className={`text-4xl md:text-5xl text-white font-bold mb-4`}>
    //         Connecting <br />
    //         <span className="animate-color-cycle"> You to Flexible</span>
    //         <br /> Living Solutions
    //       </h1>
    //     </div>

    //     <div className=" mt-8 h-[10vh]">
    //       <h2 className="text-2xl lg:text-3xl text-white font-lexend pr-8">
    //         {/* {text} */}
    //       </h2>
    //       <p className="text-white mt-2">
    //         Flexible, Affordable, and Hassle-Free Living Solutions at Your
    //         Fingertips
    //       </p>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
