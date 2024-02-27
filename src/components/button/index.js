import React from "react";
import { ReactComponent as ForwardButton } from "../../assets/svg/Frame.svg";
import { ReactComponent as BackButton } from "../../assets/svg/BackButton.svg";
import "../button/index.css";

const Buttons = ({ title, height, style, className }) => {
  return (
    <div className="buttonContainer" style={style}>
      <p id="para" className={className}>
        {title}
      </p>
    </div>
  );
};

export { Buttons, ProductSlider };

const ProductSlider = ({ prevItem, nextItem, title }) => {
  return (
    <div className="flex items-center gap-3 ">
      <p className="text-large font-medium">{title}</p>
      <BackButton onClick={prevItem} />
      <ForwardButton onClick={nextItem} />
    </div>
  );
};
