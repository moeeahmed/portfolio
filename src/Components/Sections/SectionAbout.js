import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

import myPicture from "../../Assets/imgs/me.jpg";
import classes from "./SectionAbout.module.css";

import HTML5 from "../../Assets/SVGs/html5.svg";
import CSS3 from "../../Assets/SVGs/css3.svg";
import Javascript from "../../Assets/SVGs/javascript.svg";
import ReactJS from "../../Assets/SVGs/react.svg";
import NextJS from "../../Assets/SVGs/nextjs.svg";
import Tailwindcss from "../../Assets/SVGs/tailwind.svg";
import NodeJs from "../../Assets/SVGs/nodejs.svg";
import Express from "../../Assets/SVGs/expressjs.svg";
import MongoDB from "../../Assets/SVGs/mongodb.svg";
import DynamoDB from "../../Assets/SVGs/dynamodb.svg";
import Git from "../../Assets/SVGs/git.svg";
import AWS from "../../Assets/SVGs/aws.svg";
import Python from "../../Assets/SVGs/python.svg";
import Jira from "../../Assets/SVGs/jira.svg";

const SectionAbout = () => {
  const techIcons = [
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "Javascript", icon: Javascript },
    { name: "ReactJS", icon: ReactJS },
    { name: "NextJS", icon: NextJS },
    { name: "Tailwindcss", icon: Tailwindcss },
    { name: "NodeJs", icon: NodeJs },
    { icon: Express },
    { name: "MongoDB", icon: MongoDB },
    { name: "DynamoDB", icon: DynamoDB },
    { name: "Git", icon: Git },
    { name: "AWS", icon: AWS },
    { name: "Python", icon: Python },
    { name: "Jira", icon: Jira },
  ];

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

          <div className={classes["tech-list"]}>
            <div className={classes["inner"]}>
              {techIcons.map((tech) => (
                <div key={tech.name} className={classes["tech"]}>
                  <img src={tech.icon} alt={tech.name} />
                  {tech.name}
                </div>
              ))}
            </div>
            <div className={classes["fade"]}></div>
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
