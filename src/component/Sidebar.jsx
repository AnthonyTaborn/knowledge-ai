import React, {useState} from "react";
import "./Sidebar.css";
import MainDisplay from "./MainDisplay";
import Folder from "./Folder";
import Tab from "./TabComponents/Tab";

const Sidebar = ({folders, addFolder}) => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedFolderName, setSelectedFolderName] = useState("");   

    return (
        <div className="app-container">
          <div className="sidebar">
          <Tab />
          </div>
            
            <MainDisplay selectedFolder={selectedFolder} folderName={selectedFolderName}/>
        </div>
    );
};

export default Sidebar;
