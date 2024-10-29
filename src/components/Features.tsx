import React from "react";

import { features, featuresCopy } from "../data";
import FeatureCard from "./ui/FeatursCard";

const Features: React.FC = () => {
  return (
    // <div
    //   className={`w-full h-auto flex flex-col md:flex-row mt-8 pb-8 items-center justify-around bg-white font-lexend`}
    // >
    //   <div
    //     className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between`}
    //   >
    //     <div>
    //       <SiVorondesign className="text-2xl text-logo" />
    //     </div>
    //     <div className="px-8">
    //       <h2 className="text-2xl text-logo font-bold mb-2">Design</h2>
    //       <p className="text-sm">
    //         FlexDown's platform is simple and easy to use. Whether listing,
    //         searching, or a managing rentals, our interface guides you smoothly.
    //         With helpful suggestions and quick access to key info, finding the
    //         right place is easy...
    //       </p>
    //     </div>
    //   </div>

    //   <div
    //     className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between`}
    //   >
    //     <div>
    //       <BsGraphUpArrow className="text-2xl text-logo" />
    //     </div>
    //     <div className="px-8">
    //       <h2 className="text-2xl text-logo font-bold mb-2">Strategy</h2>
    //       <p className="text-sm">
    //         FlexDown is build to make finding flexible and afforbale living
    //         arrangements easy. We eliminate the hassle of traditional real
    //         estate, offering tools and AI-driven solutions, and real-time
    //         statistics to help you make quick, informed decisions.
    //       </p>
    //     </div>
    //   </div>

    //   <div
    //     className={`flex w-[80%] pb-8 md:w-[30%] flex-row items-start justify-between`}
    //   >
    //     <div>
    //       <IoIosRocket className="text-2xl text-logo" />
    //     </div>
    //     <div className="px-8">
    //       <h2 className="text-2xl text-logo font-bold mb-2">Marketing</h2>
    //       <p className="text-sm">
    //         We focus on reaching you where it counts- trough targeted ads,
    //         social media, and strategic partherships. Our goal is to connect you
    //         with the right housing options while educating you on the process.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section
      id="features"
      className="flex flex-col mt-16 py-32 lg:p-16 px-4 gap-20 items-center relative "
    >
      <div className="lg:max-w-3xl mx-auto text-center">
        <h1 className="lg:text-5xl text-3xl font-semibold text-[#00173C] leading-[1.2em]">
          {featuresCopy.mainCopy}
        </h1>
        <h3 className="lg:max-w-2xl mt-3 mx-auto text-center text-sm lg:text-xl text-[#576a8a] font-normal leading-[1.5em]">
          {featuresCopy.subCopy}
        </h3>
      </div>
      <div className=" flex gap-20 flex-col lg:flex-row relative ">
        <div className="framer-g3zcne-container lg:h-[480px] lg:sticky top-[120px] lg:w-1/2 grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div
            className=" bg-[#F3F4F6] rounded-3xl"
            style={{ position: "relative" }}
          >
            <img
              decoding="async"
              sizes="320px"
              srcSet=""
              src=""
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                top: "83%",
              }}
            />
          </div>

          {/* Image 2 */}
          <div
            className=" bg-[#F3F4F6] rounded-3xl"
            style={{ position: "relative" }}
          >
            <img
              decoding="async"
              sizes="320px"
              srcSet=""
              src=""
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 3 */}
          <div
            className=" bg-[#F3F4F6] rounded-3xl"
            style={{ position: "relative" }}
          >
            <img
              decoding="async"
              sizes="320px"
              srcSet=""
              src=""
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 4 */}
          <div
            className=" bg-[#F3F4F6] rounded-3xl"
            style={{ position: "relative" }}
          >
            <img
              decoding="async"
              sizes="320px"
              srcSet=""
              src=""
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="features-copy flex flex-col gap-32 lg:w-1/2">
          {features.map((feature) => (
            <div className=" mx-4" key={feature.id}>
              <FeatureCard
                description={feature.description}
                Icon={feature.icon}
                title={feature.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
