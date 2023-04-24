import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";

import classes from "./SectionContact.module.css";

const SectionContact = () => {
  return (
    <div className={classes["contact-section"]}>
      <Section id="contact-section">
        <SectionHeader
          heading={"Get Into Contact"}
          subheading={"What To Know More?"}
          overline={false}
        />
        <p>
          If you're interested in learning more about my skills and experience,
          I would be happy to provide additional information. Just give me a
          send me an email and i will get back to you!
        </p>
        <div className={`${classes["contact-btn"]}`}>
          <a href="mailto:m.ahamedbusiness@gmail.com">Drop me a message!</a>
        </div>
      </Section>
    </div>
  );
};

export default SectionContact;
