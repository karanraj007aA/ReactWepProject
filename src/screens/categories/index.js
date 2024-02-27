import React, { useEffect } from "react";
import { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import "../categories/index.css";
import Icon from "@mui/material/Icon";
import { auth } from "../../firebase/firebase";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      const innerWidth = window.innerWidth;
      console.log(innerWidth);
      let isMobile = window.matchMedia("(max-width: 1180px)").matches;
      console.log("isMobile: " + isMobile);
    };
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        const userId = localStorage.getItem("user");
        console.log("user id is ", userId);
        if (userId == null) {
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle errors
      });
  };

  return (
    <div className="headerContainer">
      <div id="first" className="menu">
        <p>Home</p>
        {innerWidth <= 480 && (
          <a onClick={() => setState(!state)}>
            <Icon>menu</Icon>
          </a>
        )}
      </div>
      {innerWidth > 480 && (
        <div id="second">
          <div className="grid-container">
            <a
              className="items1"
              onClick={() => console.log("this is console")}
            >
              <div>height</div>
            </a>
            <a className="items1">
              <div>width</div>
            </a>
            <a className="items1">
              <div>padding</div>
            </a>
            <a className="items1" onClick={handleLogout}>
              <p>Logout</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
