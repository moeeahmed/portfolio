import React from "react";

import classes from "./SectionHeader.module.css";

const SectionHeader = ({ heading, subheading, overline = true }) => {
  return (
    <React.Fragment>
      {subheading && <h3 className={classes["sub--headings"]}>{subheading}</h3>}
      <h2
        className={`${classes["section--headings"]} ${
          overline ? classes["overline"] : ""
        }`}
      >
        {heading}
      </h2>
    </React.Fragment>
  );
};

export default SectionHeader;
