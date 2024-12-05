import React from "react";

import classes from "./Project.module.css";

const Project = ({ data }) => {
  const { title, maincontent, techUsed, githublink, link, screenshot } = data;

  return (
    <div className={classes["project"]}>
      <div className={classes["project__info"]}>
        <div className={classes["project__title"]}>
          <h3>{title}</h3>
        </div>
        <div className={classes["project__content"]}>
          <p>
            {maincontent.reduce((curr, next) => [curr, <br />, <br />, next])}
          </p>
        </div>
        <div className={classes["technologies__used"]}>
          <ul>
            {techUsed.map((tech) => (
              <li>
                <img
                  src={require(`../../Assets/SVGs/${tech.toLowerCase()}.svg`)}
                  alt={`${tech} Logo`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["project__links"]}>
          <ul>
            {link && (
              <li>
                <a href={link} rel="noreferrer" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </li>
            )}
            <li>
              <a href={githublink} rel="noreferrer" target="_blank">
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["project__screenshot"]}>
        <img
          src={require(`../../Assets/imgs/${screenshot}`)}
          alt={`${title} Screenshot`}
        />
      </div>
    </div>
  );
};

export default Project;
