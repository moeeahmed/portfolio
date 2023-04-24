import React from "react";

import Header from "../Header/Header";
import SectionIntro from "../Sections/SectionIntro";
import Container from "../UI/Container";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero__container"]}>
      <Container>
        <Header />
        <SectionIntro />
      </Container>
    </div>
  );
};

export default Hero;
