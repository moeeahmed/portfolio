import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import classes from "./Footer.module.css";

import Github from "../../Assets/SVGs/github.svg";
import linkedIn from "../../Assets/SVGs/linkedin.svg";
import instagram from "../../Assets/SVGs/instagram.svg";
import ritrue from "../../Assets/SVGs/ritrue.svg";

const Footer = () => {
  const fixedListRef = useRef();

  const links = {
    github: { link: "https://github.com/moeeahmed", logo: Github },
    linkedIn: {
      link: "https://www.linkedin.com/in/mohammed-ahamed-31367b134",
      logo: linkedIn,
    },
    instagram: { link: "https://www.instagram.com/___mo.97", logo: instagram },
    Ritrue: { link: "https://www.Ritrue.com", logo: ritrue },
  };

  const linksJSX = Object.entries(links).map(([key, val]) => {
    return (
      <li key={key}>
        <a href={val.link} rel="noreferrer" target="_blank">
          <img src={val.logo} alt={`${key} Logo`} />
        </a>
      </li>
    );
  });

  useEffect(() => {
    gsap.fromTo(
      fixedListRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <footer>
      <ul
        ref={fixedListRef}
        className={`${classes["fixed-list"]} "fade-in-left" `}
      >
        {linksJSX}
      </ul>

      <ul className={classes["links"]}>{linksJSX}</ul>

      <p>&#169; Mohammed Ahamed 2022</p>
    </footer>
  );
};

export default Footer;
