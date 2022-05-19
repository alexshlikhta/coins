import React from "react";
import setPictures from "../setPictures";
// import setScrollTrigger from "../../components/setScrollTrigger";
// import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
  const images = setPictures(require.context("../../assets/img/c-subscribe/", false, /\.(png|jpe?g|svg|webp)$/));
  // const ref = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   ScrollTrigger.getAll().forEach((tl) => tl.kill());

  //   setTimeout(() => {
  //     let element = ref.current;
  //     let start = element.getBoundingClientRect().y + window.scrollY;
  //     let startPoint = `${start} bottom`;
  //     setScrollTrigger(element.querySelector(".figure-1"), -100, startPoint);
  //     setScrollTrigger(element.querySelector(".figure-2"), -200, startPoint);
  //     setScrollTrigger(element.querySelector(".figure-3"), -350, startPoint);
  //   }, 50);
  // }, [location]);

  return (
    <>
      <div className="c-subscribe">
        <span className="c-subscribe-figure figure-1" data-speed="1.1">
          <img src={images["figure-1.png"]} alt="" />
        </span>
        <span className="c-subscribe-figure figure-2" data-speed="1.3">
          <img src={images["figure-2.png"]} alt="" />
        </span>
        <span className="c-subscribe-figure figure-3" data-speed="1.2">
          <img src={images["figure-3.png"]} alt="" />
        </span>

        <div className="c-subscribe-box">
          <h2>Curious? subscribe and be in the know!</h2>

          <div className="c-subscribe-box-form">
            <div className="el-input">
              <input name="user-name" id="user-name" type="text" />

              <label htmlFor="user-name">Your name</label>
            </div>

            <div className="el-checkbox">
              <input name="user-check" id="user-check" type="checkbox" />

              <label htmlFor="user-check">
                I confirm that I read and agree to the
                <a href="/">privacy policy</a>
              </label>
            </div>

            <button className="el-button outline" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
