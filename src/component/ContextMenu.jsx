import React from "react";

const ContextMenu = ({ xPos, yPos, folder, deleteFolder, renameFolder, setSelectedFolderName, handleContextMenuClose }) => {
  const handleDelete = () => {
    deleteFolder(folder.name);
    handleContextMenuClose();
  };

  const handleRename = () => {
    const newName = window.prompt("Enter a new name for the folder:", folder.name);
    if (newName) {
      renameFolder(folder.name, newName);
      setSelectedFolderName(newName);
    }
    handleContextMenuClose();
  };

  return (
    <div className="context-menu" style={{ top: yPos, left: xPos }}>
      <div className="context-menu-item" onClick={handleDelete}>
        Delete
      </div>
      <div className="context-menu-item" onClick={handleRename}>
        Rename
      </div>
    </div>
  );
};

export default ContextMenu;
