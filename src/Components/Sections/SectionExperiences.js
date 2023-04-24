import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Tabs from "../Tabs/Tabs";

import SectionBody from "./SectionBody";

const SectionExperiences = () => {
  return (
    <Section id="experiences-section">
      <SectionHeader heading={"Experiences"} />
      <SectionBody>
        <Tabs />
      </SectionBody>
    </Section>
  );
};

export default SectionExperiences;
