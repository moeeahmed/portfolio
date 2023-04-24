import React from "react";

import Container from "../UI/Container";
import { ReactComponent as LogoSVG } from "../../Assets/logo.svg";

import classes from "./Splash.module.css";

const Splash = () => {
  return (
    <Container>
      <div className={classes["splash"]}>
        <LogoSVG />
      </div>
    </Container>
  );
};

export default Splash;
