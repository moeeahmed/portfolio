import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import { projectData } from "../../Data/projects-data";

import Projects from "../Projects/Project";

import classes from "./SectionProjects.module.css";

const SectionProjects = () => {
  const projectsRef = useRef();

  useEffect(() => {
    const projects = projectsRef.current.childNodes;

    gsap.registerPlugin(ScrollTrigger);

    projects.forEach((project, i) => {
      console.log(project);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
        },
      });

      tl.fromTo(
        project,
        { x: i % 2 === 0 ? 100 : -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2.5 }
      );
    });
  });

  return (
    <Section id="projects-section">
      <SectionHeader heading={"Projects"} />
      <SectionBody>
        <div className={classes["information"]}>
          <ul ref={projectsRef}>
            {projectData.map(
              (el, index) => index < 3 && <Projects key={index} data={el} />
            )}
          </ul>
        </div>
      </SectionBody>
    </Section>
  );
};

export default SectionProjects;
