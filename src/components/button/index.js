import React from "react";
import "../button/index.css";

const Button = ({ title, height, style, className }) => {
  return (
    <div className="buttonContainer" style={style}>
      <p id="para" className={className}>
        {title}
      </p>
    </div>
  );
};

export default Button;
