import React, { useState } from "react";
import useBodyClass from "../../hooks/useBodyClass";
import Subscribe from "../../components/Subscribe";
import FaqElement from "../../components/FaqElement";

const Faq = () => {
  useBodyClass("p-faq");

  const [activeTab, setActiveTab] = useState(null);

  const getActiveTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const faqs = [
    {
      title: "Which membership should I choose?",
      content: "The best membership is the yearly one as it gives you the best discount and also Wavu tokens in equivalent amount.",
    },
    {
      title: "Do you provide cryptocurrency picks or trading entries/exits?",
      content: "The best equivalent amount.",
    },
    {
      title: "Are you a trading group?",
      content:
        "The best membership is the yearly one as it gives you the membership is the yearly one as it gives you themembership is the yearly one as it gives you themembership is the yearly one as it gives you themembership is the yearly one as it gives you the best discount and also Wavu tokens in equivalent amount.",
    },
    {
      title: "Can I access all contents and any research?",
      content: "The best membership is the yearly one as it gives you the best discount and also Wavu tokens in equivalent amount.",
    },
    {
      title: "Do you accept cryptocurrency payments?",
      content: "The best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly oneThe best membership is the yearly one as it gives you the best discount and also Wavu tokens in equivalent amount.",
    },
    {
      title: "Can I upgrade or downgrade my membership?",
      content: "The best membership is the yearly one as it.",
    },
    {
      title: "What is Wavu and what value does it give members?",
      content: "The best membership is the yearly one as it gives you the best discount and also Wavu tokens in equivalent amount.",
    },
  ];

  return (
    <>
      <main className="p-faq-main">
        <h1>Frequently Asked Questions</h1>

        <ul className="faq">
          {faqs.map(({ title, content }, index) => (
            <FaqElement activeTab={activeTab} key={index} index={index} title={title} content={content} handleClick={getActiveTab} />
          ))}
        </ul>
      </main>

      <Subscribe />
    </>
  );
};

export default Faq;
