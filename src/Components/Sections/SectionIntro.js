import React from "react";

import Section from "./Section";

import classes from "./SectionIntro.module.css";

const SectionIntro = () => {
  return (
    <Section>
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
        <a href="https://github.com/moeeahmed" rel="noreferrer" target="_blank">
          Checkout My Git Repo
        </a>
      </div>
    </Section>
  );
};

export default SectionIntro;
