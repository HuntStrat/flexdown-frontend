import { bannerCopy } from "../data";
import CtaButton from "./ui/CtaButton";
const Banner = () => {
  return (
    <section className="my-28 flex flex-col justify-center items-center ">
      {/* image to bg-banner */}

      <div className="flex flex-col rounded-3xl md:p-[120px] py-8 mx-12 items-center p-2 bg-gradient-to-bl from-[#87CCFF] to-white bg-cover bg-center relative overflow-hidden">
        <h1 className="flex flex-col font-semibold text-2xl lg:text-[40px] lg:leading-[1em] xl:text-5xl  text-center mb-5">
          {bannerCopy}
        </h1>

        <CtaButton
          linkTo="/get-started"
          title="Get Started Now"
          otherClasses="bg-white w-max font-medium border border-[#E3E3E3] "
        />

        {/* <div className='aspect-square bottom-[-230px] flex-none h-[var(auto,600px)] left-[-230px] overflow-hidden pointer-events-none absolute w-[600px] z-[1]  hidden md:block'>
                    <div className='absolute' style={{ borderRadius: "inherit", inset: "0px" }}>
                        <img decoding="async" sizes="600px" srcSet="" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }} ></img>
                    </div>

                </div> */}

        {/* <div className='aspect-square bottom-[-230px] flex-none h-[var(auto,600px)] right-[-230px] overflow-hidden pointer-events-none absolute w-[600px] z-[1]  hidden md:block'>
                    <div className='' style={{}}>
                        <img decoding="async" sizes="600px" srcSet="" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }} ></img>
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default Banner;
