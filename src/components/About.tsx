import React from "react";
import Image from "@/assets/images/team.jpg";

const About: React.FC = () => {
  return (
    <section className="bg-[#6a21ad] h-full flex flex-col md:items-center px-5 py-10 text-[clamp(1rem, 5vw + .8rem , 1.2rem)]">
      <h1 className="text-xl text-white font-semibold text-center md:text-4xl">
        About Us
      </h1>

      {/* begining of content */}
      <div className=" my-5 grid md:grid-cols-2 md:max-w-[1232px] lg:max-w-[1259px] gap-4 ">
        <div className="  flex flex-col gap-4 my-5 md:my-0 md:h-full  p-8 bg-white aspect-w-16 aspect-h-9 rounded-lg">
          <h1 className="text-purple font-bold">Our Mission</h1>

          <div className="">
            <div>
              <h2 className="text-xl font-semibold">
                Revolutionizing Your Real Estate Experience
              </h2>
            </div>

            <p className="text-tx-clamp">
              At FlexDown, our mission is to transform the way you find and
              manage flexible living arrangements. We strive to simplify your
              real estate journey by offering innovative solutions and
              user-friendly tools that make finding short-term rentals,
              co-living spaces, and purchasing or selling homes as seamless and
              stress-free as possible. By leveraging cutting-edge technology and
              a user-centered design, we aim to empower you to make informed
              decisions with ease, ensuring that your search for the perfect
              living arrangement is both efficient and enjoyable.
            </p>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold">
              Expanding Your Market: Connecting You with More Opportunities
            </h2>
            <p className="text-tx-clamp">
              At FlexDown, we’re dedicated to expanding your market reach and
              enhancing your search for flexible living arrangements. By syncing
              listings across multiple platforms and integrating with key real
              estate networks, we ensure that you have access to the broadest
              range of options available. Our advanced technology aggregates and
              updates listings in real-time, so you can explore a diverse array
              of properties, from short-term rentals to co-living spaces,
              without missing out on new opportunities. Whether you’re looking
              to rent, buy, or sell, our comprehensive and synchronized market
              approach helps you connect with the best options to
              suit your needs.
            </p>
          </div>

          <div className=" text-pretty ">
            <p className="text-xl font-semibold">
              Seamless Integration: Synchronizing Listings for a Smooth
              Experience
            </p>
            <p className="text-tx-clamp">
              Our platform is designed to make your search and management of
              real estate listings as effortless as possible. By synchronizing
              with various listing sources and real estate databases, we ensure
              that all information is current and accurate. This seamless
              integration means you can easily track and manage your listings,
              view updates, and respond to opportunities without having to
              juggle multiple systems. With FlexDown, you can trust that your
              real estate experience is streamlined, with up-to-date listings at
              your fingertips, allowing you to make timely and
              informed decisions.
            </p>
          </div>
        </div>

        {/* other side  */}

        <div className="flex flex-col gap-4 my-5 md:my-0 md:h-full md:min-w-[50%]">
          <div className=" aspect-w-16 aspect-h-9 ">
            {/* you have to save this image */}
            <img
              src={Image}
              alt="about pic"
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 gap-4 text-xl text-purple font-bold px-4 py-8 bg-white rounded-lg">
            <div className="bg-[#e5e5e5] py-8 px-2 rounded-md text-center md:min-w-[clamp(50px,50%,300px)]">
              <h2 className="text-[clamp(.8vw, 1vw + .6rem ,1.2rem)]">2.2</h2>
              <p className="text-[clamp(1rem, .8vw, 1.1rem)]">
                Years Experience
              </p>
            </div>
            <div className="bg-[#e5e5e5] py-8 px-2 rounded-md text-center md:min-w-[clamp(50px,50%,300px)]">
              <h2>122</h2>
              <p>Customers</p>
            </div>
            <div className="bg-[#e5e5e5] py-8 px-2 rounded-md text-center md:min-w-[clamp(50px,50%,200px)]">
              <h2>2000+</h2>
              <p>Houses and OfficeSpace</p>
            </div>
            <div className="bg-[#e5e5e5] py-8 px-2 rounded-md text-center md:min-w-[clamp(50px,50%,300px)]">
              <h2>2.2</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
