import { clientCopy } from "../data";
import ClientCard from "./ui/ClientCard";
import { clientLogos } from "../data";

const ClientSlider = () => {
  // Duplicate the logos array to create a continuous loop
  const logosToDisplay = [...clientLogos, ...clientLogos];

  return (
    <section
      className="mt-16 px-12 "
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
      }}
    >
      <div className="items-center flex flex-none flex-col flex-nowrap gap-10 h-min justify-center relative w-full z-[1] p-0">
        <h2 className="text- lg:text-xl uppercase text-center ">
          {clientCopy}
        </h2>
      </div>
      <div className="overflow-hidden py-6">
        {/* Make sure the container hides overflow */}
        <div className=" whitespace-nowrap animate-marquee">
          {logosToDisplay.map((client, idx) => (
            <div key={idx} className=" mx-4">
              <ClientCard logo={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
