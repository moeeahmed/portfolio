import React, { useState } from "react";
import TabBody from "./TabBody";

import classes from "./TabHeads.module.css";

const TabHeads = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const tabs = ["experience", "education", "certs"];

  const tabHandler = (event) => {
    setActiveTab(event.target.textContent);
  };

  const tabsJSX = tabs.map((tab) => (
    <li key={tab}>
      <a
        data-tab={`tab-${tab}`}
        onClick={tabHandler}
        className={`tab-link ${activeTab === tab ? classes["active"] : ""}`}
      >
        <span>{tab}</span>
      </a>
    </li>
  ));

  return (
    <div className={classes["tabs-block"]}>
      <div id={classes["tabs-section"]} className={classes["tabs"]}>
        <ul className={classes["tab-head"]}>{tabsJSX}</ul>
        <TabBody activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabHeads;
