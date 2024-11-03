import React from "react";
import CallToActionButton from "./ui/CallToActionButton";
import { faqCopy, faqs } from "../data";
import { Accordion, AccordionItem } from "./ui/Accordion";

const Faq = () => {
  return (
    <section
      id="faq"
      className=" mt-16 py-32 lg:p-16  flex flex-col lg:flex-row px-4 gap-10"
    >
      <div className="flex flex-col lg:w-1/2 gap-5">
        <h1 className="lg:text-5xl text-2xl font-semibold">
          {faqCopy.mainCopy}
        </h1>
        <h3 className="text-[#576a8a] text-sm lg:text-xl">{faqCopy.subCopy}</h3>
        <CallToActionButton
          linkTo="/conatct"
          title="Contact Us"
          otherClasses=" text-center font-semibold text-sm border text-white bg-[#3b81f4] w-max"
        />
      </div>

      <div className="faq-accordion lg:w-1/2">
        <Accordion>
          {faqs.map((faq) => (
            <React.Fragment key={faq.id}>
              <AccordionItem title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            </React.Fragment>
          ))}
        </Accordion>
      </div>

      {/* </div> */}
    </section>
  );
};

export default Faq;
