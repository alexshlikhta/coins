import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const setScrollTrigger = (element, distance, startPoint) => {
  let start = element.getBoundingClientRect().y + window.scrollY;

  if (startPoint === undefined) startPoint = `${start} ${start}`;

  gsap.to(element, {
    y: distance,
    scrollTrigger: {
      start: startPoint,
      endTrigger: element,
      scrub: true,
      markers: false,
    },
  });
};
export default setScrollTrigger;
