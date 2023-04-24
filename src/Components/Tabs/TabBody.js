import React from "react";

import { data } from "../../Data/tab-data";

import classes from "./TabBody.module.css";

const TabBody = ({ activeTab }) => {
  const transformData = (obj) => {
    return (
      <section className={`${classes["tab-body"]}`}>
        <h2 className={classes["tab-title"]}>{activeTab}</h2>
        {obj.map((data, i) => (
          <ul key={i}>
            <li>
              <h2>{data.heading}</h2>
              {data.subheading && <h3>{data.subheading}</h3>}
              {data.maincontent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </li>
            <hr />
          </ul>
        ))}
      </section>
    );
  };

  return <React.Fragment>{transformData(data[activeTab])}</React.Fragment>;
};

export default TabBody;
