import React from "react";

import classes from "./BackToTop.module.css";

const BackToTop = () => {
  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className={classes["backToTop"]} onClick={onClickHandler}>
      <i className="fa-solid fa-circle-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
