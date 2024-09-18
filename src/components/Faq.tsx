import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const faq: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);

  function showAnswer() {
    setIsClicked((prevState) => !prevState);
  }
  //   console.log(item);
  return (
    <div className="flex gap-4 p-2 mb-6 rounded-lg bg-[#eee]  shadow-md w-full">
      {isClicked ? (
        <FaAngleDown className="cursor-pointer" onClick={() => showAnswer()} />
      ) : (
        <FaAngleUp className="cursor-pointer" onClick={() => showAnswer()} />
      )}
      <div className="">
        <h2>{item.question}</h2>
        {isClicked && <p>{item.answer}</p>}
      </div>
    </div>
  );
};

export default faq;
