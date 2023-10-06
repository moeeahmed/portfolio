import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import { projectData } from "../../Data/projects-data";

import Projects from "../Projects/Project";

import classes from "./SectionProjects.module.css";

const SectionProjects = () => {
  const [viewMore, setViewMore] = useState(false);
  const projectsRef = useRef();
  const projectsLen = projectData.length;

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
  }, []);

  const itemsToView = !viewMore ? 3 : projectsLen;

  console.log(itemsToView);

  return (
    <Section id="projects-section">
      <SectionHeader heading={"Projects"} />
      <SectionBody>
        <div className={classes["information"]}>
          <ul ref={projectsRef}>
            {projectData.map(
              (el, index) =>
                index < itemsToView && <Projects key={index} data={el} />
            )}
          </ul>
        </div>
      </SectionBody>
      <p
        className={classes.view_more} // Ensure correct class name
        onClick={() => setViewMore(!viewMore)} // Use arrow function for correct behavior
      >
        {viewMore ? "View less ▴" : "View more ▾"}
      </p>
    </Section>
  );
};

export default SectionProjects;
