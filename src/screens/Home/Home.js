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
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          // backgroundColor: "blue",
          padding: "15%",
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
      <p>First Look</p>
    </div>
  );
};

export default Home;
