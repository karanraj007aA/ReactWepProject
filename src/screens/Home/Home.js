import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../Home/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import ColorSchemesExample from "../../components/navbar";
import { useSelector } from "react-redux";
import rootReducer from "../../redux/reducer";
import store from "../../redux/store";
import Header from "../categories";
import "../Home/Home.css";
import Button from "../../components/button";

// import {}

const Home = () => {
  const navigate = useNavigate();

  const checkLogin = useSelector((state) => state.home.loggedIn);
  console.log("================>", checkLogin);

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
    <div
      style={{
        width: "100vw",
      }}
    >
      <Header />
      {/* <ColorSchemesExample onClick={handleLogout} /> */}
      <div
        style={{
          width: "100vw",
          // height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          // backgroundColor: "blue",
          padding: "2%",
        }}
      >
        <a href={"https://www.google.co.in/"}>
          <img
            src={require("../../assets/images/nike.png")}
            width="100%"
            alt="shoe image"
          />
        </a>
      </div>
      <div className="contentDetails">
        <p className="contentDetailsText">First Look</p>
        <h4 className="contentDetailsText">NIKE AIR MAX PULSE</h4>
        <p className="contentDetailsText">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>
      </div>
      <div id="buttonID">
        <Button title={"Notify Me"} />
        <Button title={"Shop Air Max"} />
      </div>
    </div>
  );
};

export default Home;
