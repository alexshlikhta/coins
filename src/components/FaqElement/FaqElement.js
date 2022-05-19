import React, { useEffect, useRef, useState } from "react";

const FaqSingle = ({ activeTab, index, title, content, handleClick }) => {
  const [heightTab, setHeightTab] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const faqEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setHeightTab(faqEl.current.offsetHeight);
      faqEl.current.style.height = 0;
    }, 50);
  }, []);

  useEffect(() => {
    setIsActive(activeTab === index);
  }, [activeTab, index]);

  useEffect(() => {
    setTimeout(() => {
      faqEl.current.style.height = isActive ? heightTab + "px" : 0;
    }, 50);
  }, [heightTab, isActive]);

  return (
    <>
      <li className={`faq-el js--faq-el ${isActive ? "active" : ""}`}>
        <div
          className="faq-el-top"
          onClick={() => {
            handleClick(index);
          }}
        >
          <div className="faq-el-top-icon">
            <div className="icon">
              <span className="icon--line"></span>
              <span className="icon--line"></span>
            </div>
          </div>

          <div className="faq-el-top-title js--faq-el-top-title">
            <h6>{title}</h6>

            <div className="faq-el-hidden js--faq-el-hidden" ref={faqEl}>
              {content}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default FaqSingle;
