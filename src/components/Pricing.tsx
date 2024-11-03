import React from "react";
import { pricingOptions, pricingCopy } from "../data";
import PricingCard from "./ui/PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="mt-16 py-32 lg:p-16 flex flex-col justify-center items-center px-4"
    >
      <h1 className="lg:text-5xl text-3xl font-semibold">
        {pricingCopy.mainCopy}
      </h1>
      <h3 className="lg:max-w-2xl mt-4 mx-auto text-center text-sm lg:text-xl text-[#576a8a] font-normal leading-[1.5em]">
        {pricingCopy.subCopy}
      </h3>

      <div className="pricing-cards flex flex-col slg:flex-row mt-12 gap-4 ">
        {pricingOptions.map((item) => (
          <React.Fragment key={item.id}>
            <PricingCard
              title={item.title}
              desc={item.desc}
              price={item.price}
              choiceText={item.choiceText}
              featuresText={item.featuresText}
              features={item.features}
              id={item.id}
              otherClasses={`${item.id == 1 && "bg-[#F3F4F6]"} ${item.id == 2 && " bg-[#EBF2FE] border-2 border-[#3b81f4]"} `}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
