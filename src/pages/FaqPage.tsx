import React from "react";
import Faq from "@/components/Faq";

const data = [
  {
    question: "What do we do?",
    answer:
      " We provide secure,stress-free and affordable means of getting and movin into your new home",
  },
  {
    question: "How do I search for available rentals?",
    answer:
      "You can search for available rentals by entering your desired location, price range, and other preferences into the search bar.",
  },
  {
    question: "What is the process for renting a property?",
    answer:
      " Typically, you’ll need to search for a property, schedule a viewing, submit an application, and sign a lease agreement.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "We provide secure,stress-free and affordable means of getting and movin into your new home.",
  },
  {
    question: "What is the security deposit?",
    answer:
      "The security deposit is usually one month’s rent, but it can vary depending on the property and your creditworthiness.",
  },
];

const FaqPage: React.FC = () => {
  // console.log(isClicked);i
  // const showAnswer = false;
  return (
    <div className="w-full ">
      <section className="py-4 px-8 flex flex-col items-center">
        <div className="my-4 text-center leading-normal">
          <h2 className="text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>
          <p className="my-4">
            Qucik answers to questions you may have about rental processes and
            payment.Can't find what you're looking for? Give us a direct call.
          </p>
        </div>

        {/* uqestions and answers  */}
        <div className="h-full w-full flex flex-col  items-center md:max-w-[60%]">
          {data.map((obj, i) => (
            <Faq key={i} item={obj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
