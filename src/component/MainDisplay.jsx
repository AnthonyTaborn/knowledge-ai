import React from "react";
import "./MainDisplay.css";

const MainDisplay = ({ selectedFolder }) => {
  return (
    <div className="main-display">
      {selectedFolder ? (
        <>
          <div className="main-flex">
            <h2>{selectedFolder.name || ""}</h2>
            <div className="button-container">
              <button className="new-document-button">Create New Document</button>
              <button onClick={() => document.getElementById(`fileInput-${selectedFolder.name}`).click()}>
                Add Files
              </button>
            </div>
          </div>
          <div className="sidebar_flex">
            <div className="sidebar__footer">
              <input type="text" placeholder="Search files" />
            </div>
            {selectedFolder.files.map((file) => (
              <div key={file.name}>
                <p>{file.name}</p>
                <p>{file.type}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Select a folder to view its contents</p>
      )}
    </div>
  );
};

export default MainDisplay;
