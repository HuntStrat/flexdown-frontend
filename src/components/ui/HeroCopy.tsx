import { heroCopy } from "../../data";

const HeroCopy = () => {
  return (
    <div className="just-copy  animate-in-f-b duration-1000  ">
      <h1 className="lg:text-[56px] text-3xl lg:leading-[1.3em] max-w mb-4 font-semibold">
        {heroCopy.mainCopy}
      </h1>
      <h3 className="text-[#576a8a]">{heroCopy.subCopy}</h3>
    </div>
  );
};

export default HeroCopy;
