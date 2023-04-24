import React from "react";

import "./Section.module.css";

const Section = (props) => {
  return <section id={props.id}>{props.children}</section>;
};

export default Section;
