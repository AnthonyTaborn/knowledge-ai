import React from "react";
import { FaFile } from "react-icons/fa";

const File = ({ name, type }) => {
  return (
    <div className="file">
      <FaFile className="file__icon" />
      <span>{name}</span>
      <span>{type}</span>
    </div>
  );
};

export default File;