import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

import myPicture from "../../Assets/imgs/me.jpg";
import classes from "./SectionAbout.module.css";

const SectionAbout = () => {
  const techIcons = [
    "HTML5",
    "CSS3",
    "Javascript",

    "ReactJS",
    "NodeJs",
    "Express",
    "MongoDB",

    "Git",
    "AWS",
    "Python",
  ];

  const formatList = (arr) => {
    return arr.map((el) => (
      <dd key={el}>
        <span>{el}</span>
      </dd>
    ));
  };

  const firstHalf = techIcons.slice(0, Math.ceil(techIcons.length / 2));
  const secondHalf = techIcons.slice(Math.ceil(techIcons.length / 2));

  const list_left = formatList(firstHalf);
  const list_right = formatList(secondHalf);

  return (
    <Section id="about-section">
      <SectionHeader heading={"About Me"} />
      <SectionBody>
        <div className={classes["information"]}>
          <p>
            Hey there! My name is Mohammed and I'm a automotive systems engineer
            with multiple years experience under my belt designing,
            implementing, and maintain complex systems.
            <br />
            <br />
            I also have an interest in software engineering, building and
            creating with code. I first discovered my love for programming
            through online resources and tutorials, and have since dedicated
            countless hours to learning and improving my skills.
            <br />
            <br />I am a self-taught using some of the following technologies:
          </p>
          <div className={classes["list"]}>
            <dl>{list_left}</dl>
            <dl>{list_right}</dl>
          </div>
        </div>
        <div className={classes["image"]}>
          <img src={myPicture} alt="Mohammed Ahamed" />
        </div>
      </SectionBody>
    </Section>
  );
};

export default SectionAbout;
