import React from "react";

import classes from "./SectionBody.module.css";

const SectionBody = (props) => {
  return <div className={classes["mainbody"]}>{props.children}</div>;
};

export default SectionBody;
