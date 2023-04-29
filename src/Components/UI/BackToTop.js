import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import classes from "./BackToTop.module.css";

const BackToTop = () => {
  const arrowRef = useRef();

  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
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
    <button
      ref={arrowRef}
      className={classes["backToTop"]}
      onClick={onClickHandler}
    >
      <i className="fa-solid fa-circle-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
