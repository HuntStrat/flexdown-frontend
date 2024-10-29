import { footerCopy } from "../data";

const Footer = () => {
  return (
    <section className="lg:p-12 px-4 pb-4">
      <div className="footer-header flex flex-col lg:flex-row mb-4  gap-6">
        <div className="company-profile flex flex-col w-full lg:w-1/2 md:gap-6 gap-6">
          <img
            src="./src/assets/images/logo/flexDown_logo.png"
            alt="flexdown logo"
            className="w-[180px] h-[auto]"
          />
          <h1 className="text-[#576a8a] leading-[1.5em] text-xl">
            {footerCopy.mainCopy}
          </h1>
          <div className="social-links"></div>
        </div>

        <div className="subscription flex flex-col  gap-5 w-full lg:w-1/2">
          <p className="font-semibold text-base">
            Want to free up time to close more deals ?
          </p>
          <form
            action=""
            method="post"
            className=" flex flex-row w-full gap-2 h-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              className="rounded-full text-base border-none p-4 w-full bg-[#F3F4F6]"
            />
            <input
              type="submit"
              value="Join the waitlist"
              className="text-white text-base rounded-full cursor-pointer border-none p-4 bg-[#3B81F4] h-full"
            />
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-footer flex justify-center mt-4 text-sm md:text-base">
        <p>{footerCopy.copyright}</p>
      </div>
    </section>
  );
};

export default Footer;
