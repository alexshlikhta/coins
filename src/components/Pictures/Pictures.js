import React from "react";

const Pictures = ({ imgS2x, imgS1920, imgS1440, imgS1024, imgS768, imgS640, desc }) => {
  return (
    <picture>
      {imgS2x &&
        imgS2x.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 1921px)" srcSet={el.name} />;
        })}

      {imgS1920 &&
        imgS1920.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 1441px) and (max-width: 1920px)" srcSet={el.name} />;
        })}

      {imgS1440 &&
        imgS1440.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 1025px) and (max-width: 1440px)" srcSet={el.name} />;
        })}

      {imgS1024 &&
        imgS1024.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 769px) and (max-width: 1024px)" srcSet={el.name} />;
        })}

      {imgS768 &&
        imgS768.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 641px) and (max-width: 768px)" srcSet={el.name} />;
        })}

      {imgS640 &&
        imgS640.map((el, index) => {
          return <source key={index} type={`image/${el.type}`} media="(min-width: 320px) and (max-width: 640px)" srcSet={el.name} />;
        })}

      {imgS1920 && <img src={imgS1920[0].name} alt={desc} />}
    </picture>
  );
};

export default Pictures;
