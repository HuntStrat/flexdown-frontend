const CtaButton = ({
  linkTo,
  title,
  otherClasses,
}: {
  linkTo: string;
  title: string;
  otherClasses?: string;
}) => {
  return (
    <div className={`rounded-full xl p-2 px-4 font-semibold ${otherClasses}`}>
      <a href={linkTo} className="text-center">
        {" "}
        {title}
      </a>
    </div>
  );
};

export default CtaButton;
