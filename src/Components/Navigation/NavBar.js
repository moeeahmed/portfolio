import React, { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";

import CV from "../../Assets/CV_latest.pdf";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navRef = useRef();
  const navListRefs = useRef();

  const pages = ["about", "experiences", "projects", "contact"];

  const navToggleHandler = () => {
    setNavToggle((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.${classes["wrapper"]} ${navToggle ? classes["active"] : ""}`, {
        rotation: 180,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className={classes["nav"]}>
      <button
        className={classes["nav__toggle"]}
        onClick={navToggleHandler}
        aria-expanded={navToggle}
        aria-label={navToggle ? "close menu" : "menu"}
        type="button"
      >
        <a
          href="/#"
          id={classes["nav-toggle"]}
          className={navToggle ? classes["active"] : ""}
        >
          <span></span>
        </a>
      </button>
      <ul
        ref={navListRefs}
        className={`${classes["wrapper"]} ${
          navToggle ? classes["active"] : ""
        }`}
      >
        {pages.map((page) => {
          return (
            <li key={page} className={classes["nav__item"]}>
              <a href={`#${page}-section`}>{page}</a>
            </li>
          );
        })}
        <li className={`${classes["nav__item"]} ${classes["cv-btn"]}`}>
          <a href={CV} rel="noreferrer" target="_blank">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
