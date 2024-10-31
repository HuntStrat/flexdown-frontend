import { IconType } from "react-icons";

interface FeatureCardProps {
  description: string;
  Icon: IconType;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  description,
  title,
  Icon,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="bg-[#3b81f41a] items-center p-[10px] rounded-full w-max">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className=" lg:text-[32px] text-xl font-semibold">{title}</h4>
      <p className="text-[#576a8a] text-sm lg:text-xl font-normal">
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;
