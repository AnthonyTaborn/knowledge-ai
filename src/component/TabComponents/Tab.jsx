import React, { useState } from "react";
import "./AllTabs/style/Tab.css";
import Folder from "../Folder";
import FirstTab from "./AllTabs/FirstTab";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <div className="flex--tab">
      <div
        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
        onClick={() => handleTabClick("tab1")}
      >
        Tab 1
      </div>
      <div
        className={`tab ${activeTab === "tab2" ? "active" : ""}`}
        onClick={() => handleTabClick("tab2")}
      >
        Tab 2
      </div>
      </div>
      {activeTab === "tab1" && <FirstTab />}
    </div>
  );
};

export default Tab;
