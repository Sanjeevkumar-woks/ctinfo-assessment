import React from "react";
import "./DescriptionBox.css";

interface DescriptionBoxProps {
  description: string;
  handleClose: () => void;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  description,
  handleClose,
}) => {
  return (
    <div className="description-box">
      <div className="description-button">
        <h3>Description:</h3>
        <button onClick={handleClose} className="btn">
          X
        </button>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default DescriptionBox;
