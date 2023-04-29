import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Section.module.css";

const Section = (props) => {
  const sectionRef = useRef();

  useEffect(() => {
    var sections = document.querySelectorAll("section");
    gsap.registerPlugin(ScrollTrigger); // register the ScrollTrigger plugin

    sections.forEach(function (section) {
      // create a new timeline for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // start the animation when the top of the section is 80% in view
        },
      });

      // add animations to the timeline
      tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 2.5 });
    });
  });

  return (
    <section ref={sectionRef} id={props.id}>
      {props.children}
    </section>
  );
};

export default Section;
