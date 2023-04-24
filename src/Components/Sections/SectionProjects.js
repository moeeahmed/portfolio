import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import { projectData } from "../../Data/projects-data";

import Projects from "../Projects/Project";

import classes from "./SectionProjects.module.css";

const SectionProjects = () => {
  return (
    <Section id="projects-section">
      <SectionHeader heading={"Projects"} />
      <SectionBody>
        <div className={classes["information"]}>
          <ul>
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
