import React, { useEffect } from "react";
import { useState } from "react";
import "../categories/index.css";
const Header = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    return () => {
      const innerWidth = window.innerWidth;
      console.log(innerWidth);
      let isMobile = window.matchMedia("(max-width: 1180px)").matches;
      console.log("isMobile: " + isMobile);
    };
  });
  return (
    <div className="headerContainer">
      <div id="first" className="menu">
        <p>Home</p>
        <a onClick={() => setState(!state)}>
          <p>Menu</p>
        </a>
      </div>
      {state == true && (
        <div id="second">
          <div className="grid-container">
            <div className="items1">height</div>
            <div className="items1">width</div>
            <div className="items1">padding</div>
            <span className="webIcon">hello</span>
          </div>
          <div className="grid-container">
            <span className="webIcon">hello</span>
            <div className="items2">width1</div>
            <span className="webIcon">hello</span>
            <div className="items2">padding1</div>
            <div className="items3">element</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
