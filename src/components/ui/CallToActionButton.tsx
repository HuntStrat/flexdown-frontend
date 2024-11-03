const CallToActionButton = ({
  linkTo,
  title,
  otherClasses,
}: {
  linkTo: string;
  title: string;
  otherClasses?: string;
}) => {
  return (
    <a
      href={linkTo}
      className={`rounded-full xl p-2 px-4 font-semibold ${otherClasses}`}
    >
      {title}
    </a>
  );
};

export default CallToActionButton;
