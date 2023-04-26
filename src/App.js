import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import MainDisplay from "./component/MainDisplay";
import "./App.css";
import "./component/Sidebar.css";
import Tab from "./component/TabComponents/Tab";

function App() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [folders, setFolders] = useState([
    { name: "Folder 1", files: [] },
    { name: "Folder 2", files: [] },
    { name: "Folder 3", files: [] },
  ]);

  const handleAddFolder = (newFolder) => {
    setFolders([...folders, newFolder]);
  };

  return (
    <div >
      <Sidebar folders={folders} addFolder={handleAddFolder} setSelectedFolder={setSelectedFolder} />
    </div>
  );
}

export default App;
