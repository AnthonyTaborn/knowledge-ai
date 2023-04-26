import React from "react";
import "./Popup.css";

const Popup = ({ children, handleClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
