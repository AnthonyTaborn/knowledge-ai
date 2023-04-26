import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import File from "./File";
import ContextMenu from "./ContextMenu";

const Folder = ({
  folderName,
  files,
  deleteFolder,
  renameFolder,
  addFiles,
  handleFolderClick = () => {},
}) => {
  const [showFiles, setShowFiles] = useState(false);
  const [contextMenu, setContextMenu] = useState({ xPos: null, yPos: null });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ xPos: event.clientX, yPos: event.clientY });
  };

  const handleContextMenuClose = () => {
    setContextMenu({ xPos: null, yPos: null });
  };

  const handleNewFolder = () => {
    const newFolder = {
      name: folderName,
      files: [],
    };
    addFiles(newFolder);
  };

  const handleAddFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newFiles = selectedFiles.map((file) => ({
      name: file.name,
      type: file.type,
    }));
    addFiles(newFiles);
  };

  const handleAddFilesButtonClick = () => {
    document.getElementById(`fileInput-${folderName}`).click();
  };

  return (
    <>
      <div
        className="folder"
        onClick={() => handleFolderClick({ name: folderName, files })}
        onContextMenu={handleContextMenu}
      >
        <FaFolder className="folder__icon" />
        <div className="folder__details">
          <span className="folder__name">{folderName}</span>
          {showFiles && files && files.length > 0 && (
            <>
              {files.map((file) => (
                <File key={file.name} name={file.name} type={file.type} />
              ))}
            </>
          )}
        </div>
      </div>
      <button onClick={handleAddFilesButtonClick}>Add Files</button>
      <input
        type="file"
        id={`fileInput-${folderName}`}
        multiple
        style={{ display: "none" }}
        onChange={handleAddFiles}
      />
      {contextMenu.xPos !== null && (
        <ContextMenu
          xPos={contextMenu.xPos}
          yPos={contextMenu.yPos}
          folder={{ name: folderName, files }}
          deleteFolder={deleteFolder}
          renameFolder={renameFolder}
          handleContextMenuClose={handleContextMenuClose}
        />
      )}
    </>
  );
};

export default Folder;
