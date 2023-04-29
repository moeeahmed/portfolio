import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Section from "./Section";

import classes from "./SectionIntro.module.css";

const SectionIntro = () => {
  const introRef = useRef();

  useEffect(() => {
    const childrenArr = Array.from(introRef.current.children);

    gsap
      .fromTo(
        childrenArr,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 100,
          opacity: 1,
          duration: 2,
          stagger: {
            each: 0.2,
            from: 0,
            ease: "power2.inOut",
          },
        }
      )
      .delay(0.7);
  }, []);

  return (
    <Section>
      <div className={classes["container"]} ref={introRef}>
        <p className={classes["one"]}>Hello, my name is</p>
        <h1 className={classes["two"]}>Mohammed Ahamed.</h1>
        <h1 className={`${classes["two"]} ${classes["three"]}`}>Systems Eng</h1>
        <p className={classes["four"]}>
          I’m a system engineer specialising in the automotive sector currently
          branching out to acquire the relevant expereince needs to transition
          into a software role.{" "}
        </p>
        <div
          className={`${classes["btn"]} ${classes["github-btn"]} } slideUpFade`}
        >
          <a
            href="https://github.com/moeeahmed"
            rel="noreferrer"
            target="_blank"
          >
            Checkout My Git Repo
          </a>
        </div>
      </div>
    </Section>
  );
};

export default SectionIntro;
