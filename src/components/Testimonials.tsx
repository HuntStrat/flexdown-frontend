import React from 'react';
import SliderCarousel from './SliderCarousel';

const Testimonials = () => {
  return (
    <section className="h-full bg-[#f3f4f6] py-[80px] text-center">
      <div className="w-[45%] mx-auto">
        <h1 className="text-6xl text-primary py-4">
          What Our Happy Clients Are Saying
        </h1>
        <h2 className="text-xl text-primary/45 py-4">
          Hear from satisfied clients who have transformed their property
          management experience with our platform.
        </h2>
      </div>
      <SliderCarousel />
    </section>
  );
};

export default Testimonials;
