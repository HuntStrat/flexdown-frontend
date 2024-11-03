import React from "react";
import CallToActionButton from "./CallToActionButton";
import { CheckCheckIcon } from "lucide-react";

interface PricingCardType {
  id: number;
  title: string;
  desc: string;
  price: string;
  choiceText: string;
  featuresText: string;
  otherClasses: string;
  features: Array<string>;
}

const PricingCard: React.FC<PricingCardType> = ({
  id,
  title,
  desc,
  price,
  choiceText,
  featuresText,
  otherClasses,
  features,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 lg:max-w-sm flex flex-col ${otherClasses}`}
    >
      <div className="card-header ">
        <h1 className="text-2xl capitalize font-semibold mb-2">{title}</h1>
        <p className="text-[#576a8a] leading-[1.2em] mb-4">{desc}</p>
        <h1 className="text-[40px] font-semibold leading-[1em]">
          {price}
          <span className="text-[#576a8a] text-[18px] font-normal"> /m</span>
        </h1>
        <p className="text-[#576a8a] text-sm font-light ">{choiceText}</p>
      </div>

      <CallToActionButton
        title="Get Started Now"
        linkTo="/plan-starter"
        otherClasses={`${id == 1 && "bg-white border-[#E3E3E3] text-black"} ${id == 2 && "bg-[#3b81f4] border-[#3b81f4] text-white"} text-center font-semibold text-sm border my-4 `}
      />

      <div className="card-footer flex flex-col gap-3 ">
        <h2 className="font-semibold text-[16px]">{featuresText}</h2>
        <ul className=" flex flex-col gap-3">
          {features.map((service: string, index: number) => (
            <li key={index} className="flex gap-2 items-center">
              <CheckCheckIcon />
              <p className="text-sm font-medium leading-[1.5em] text-[#576a8a]">
                {service}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
