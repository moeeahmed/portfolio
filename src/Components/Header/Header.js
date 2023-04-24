import React from "react";

import NavBar from "../Navigation/NavBar";
import { ReactComponent as LogoSVG } from "../../Assets/logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["site-header"]}>
      <div className={classes["wrapper"]}>
        <a href="#home" className={classes["logo"]}>
          <LogoSVG />
        </a>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
