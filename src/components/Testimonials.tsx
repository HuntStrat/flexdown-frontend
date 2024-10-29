import React from "react";
import { testimonialCopy, testimonials } from "../data";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonials = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];
  return (
    <section
      id="testimonials"
      className="mt-16 py-32 p-16 flex flex-col justify-center items-center gap-20 bg-[#F3F4F6] overflow-hidden "
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
      }}
    >
      <div className="lg:max-w-3xl mx-auto text-center">
        <h1 className="text-[28px] lg:text-5xl  font-semibold text-[#00173C] leading-[1.2em]">
          {testimonialCopy.mainCopy}
        </h1>
        <h3 className="lg:max-w-2xl mt-3 mx-auto text-center text-sm lg:text-xl text-[#576a8a] font-normal leading-[1.5em]">
          {testimonialCopy.subCopy}
        </h3>
      </div>
      <section className="testminonial-cards">
        <ul className=" flex lg:flex-row gap-5 lg:gap-10 animate-marquee">
          {doubledTestimonials.map((testimonial) => (
            <React.Fragment key={testimonial.id}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                imgUrl={testimonial.imgUrl}
              />
            </React.Fragment>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Testimonials;
