import React, { useState } from "react";
import "./style.css";

const Accordion = () => {
  const accordionData = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(
    new Array(accordionData.length).fill(false)
  );
  const handleToggle = (index) => {
    const newOpenIndex = [...openIndex];
    newOpenIndex[index] = !newOpenIndex[index];
    setOpenIndex(newOpenIndex);
  };

  return (
    <div className="accordion">
      {accordionData?.map((accordion, index) => (
        <div
          key={index}
          className="accordion-item"
        >
          <button
            className="accordion-title"
            onClick={() => handleToggle(index)}
          >
            {accordion.title}
            {openIndex[index] ? (
              <ion-icon name="chevron-up-outline"></ion-icon>
            ) : (
              <ion-icon name="chevron-down-outline"></ion-icon>
            )}
          </button>
          <div
            className={`accordion-content ${openIndex[index] ? "open" : ""}`}
          >
            {accordion.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
