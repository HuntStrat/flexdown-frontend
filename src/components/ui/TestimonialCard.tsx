import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  position: string;
  imgUrl: string;
}> = ({ quote, name, position, imgUrl }) => {
  return (
    <div className="flex flex-col gap-5 bg-[#FFFFFF] p-8 w-[300px] lg:w-[652px] rounded-[20px] ">
      <li className="quote list-none">
        <RiDoubleQuotesL className="w-[60px] h-[60px] " />
      </li>
      <div className="flex flex-col gap-4">
        <div className="text">
          <p className="text-base lg:text-[18px] text-[#576a8a] leading-[1.5em] ">
            {quote}
          </p>
        </div>
        <div className="footer flex flex-col lg:flex-row gap-4 lg:items-center ">
          <img
            // decoding="async"
            className=""
            src={imgUrl}
            // width={80} height={80}
            alt="testimonial-image"
            style={{
              verticalAlign: "middle",
              objectFit: "cover",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          <div className="flex flex-col gap-1">
            <p className="lg:text-2xl text-xl font-semibold uppercase">
              {name}
            </p>
            <p className="text-[#576a8a] text-[16px] capitalize">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
