import React from "react";
import { GoX } from "react-icons/go";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"m-5 " + (faq.open ? "" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="text-white font-bold text-2xl border-b-2 border-cyan-50 flex justify-between">
        {faq.question}
        <GoX className="text-2xl text-white" />
      </div>
      <div
        className={
          "" + (faq.open ? "opacity-100 text-white text-2xl font-bold m-5" : "opacity-0")
        }
      >
        {faq.answer}
      </div>
    </div>
  );
}

export default FAQ;
