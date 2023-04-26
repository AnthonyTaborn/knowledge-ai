import React, { useState } from "react";
import Folder from "../../Folder";
import Popup from "../../Popup";
import "./style/Tab.css";
import Tab from "../Tab";

const FirstTab = ({ folders, addFolder }) => {
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [foldersState, setFoldersState] = useState(folders);
    const [newFolderName, setNewFolderName] = useState("");
    const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  
    const handleNewFolderClick = () => {
      if (newFolderName !== "") {
        const newFolder = {
          name: newFolderName,
          files: [],
        };
        setFoldersState([...foldersState, newFolder]); // Update state using spread operator
        setSelectedFolder(newFolder);
        setNewFolderName("");
        setShowAddFolderModal(false);
      }
    };
    
  
    const handleFolderClick = (folder) => {
      setSelectedFolder(folder);
    };
  
    const handleAddFolderModal = () => {
      setShowAddFolderModal(true);
    };
  
    const handleCloseAddFolderModal = () => {
      setShowAddFolderModal(false);
    };
  
    return (
      <div className="flex-bar">
        <div className="sidebar__header">
          <h2>Folders</h2>
        </div>
        <div className="sidebar__footer">
          <input type="text" placeholder="Search files" />
          <button onClick={handleAddFolderModal}>Add Folder</button>
        </div>
  
        <div className="sidebar__content">
        {Array.isArray(foldersState) && foldersState.map((folder) => (
            <Folder
              key={folder.name}
              folderName={folder.name || ''}
              files={folder.files || []}
              deleteFolder={() => {}}
              renameFolder={() => {}}
              addFiles={() => {}}
              setSelectedFolderName={() => {}}
              handleFolderClick={handleFolderClick}
            />
          ))}
          {newFolderName !== "" && (
            <Folder
              folderName={newFolderName}
              files={[]}
              deleteFolder={() => {}}
              renameFolder={() => {}}
              addFiles={() => {}}
              setSelectedFolderName={() => {}}
              handleFolderClick={() => {}}
            />
          )}
        </div>
  
        {showAddFolderModal && (
          <Popup handleClose={handleCloseAddFolderModal}>
            <h3>Create a new folder</h3>
            <form onSubmit={handleNewFolderClick}>
              <label htmlFor="newFolderName">New folder name:</label>
              <input
                type="text"
                id="newFolderName"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
              />
              <button type="submit">Create Folder</button>
            </form>
          </Popup>
        )}
        </div>
    );
  };
  
  export default FirstTab;
