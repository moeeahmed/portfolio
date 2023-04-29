import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import NavBar from "../Navigation/NavBar";
import { ReactComponent as LogoSVG } from "../../Assets/logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  const logoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <header className={classes["site-header"]}>
      <div className={classes["wrapper"]}>
        <a ref={logoRef} href="#home" className={classes["logo"]}>
          <LogoSVG />
        </a>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
