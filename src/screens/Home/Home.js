import React, { useState } from "react";
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
import { Buttons, ProductSlider } from "../../components/button/index";
import Carausel from "../../components/product-carausel";
import { Alert } from "react-bootstrap";
// import {}

const Home = () => {
  const navigate = useNavigate();
  const checkLogin = useSelector((state) => state.home.loggedIn);
  console.log("================>", checkLogin);
  const [state, setState] = useState({
    selectedProduct: null,
  });
  const handleClick = (item) => {
    setState((prev) => ({ ...prev, selectedProduct: item }));
    navigate("/productDetails", { itemId: item.id }); // Redirect to the next screen with item id in the URL
  };

  return (
    <div className="w-screen px-5">
      <Header />
      {/* <ColorSchemesExample onClick={handleLogout} /> */}
      <div className="w-screen items-center justify-center px-5">
        <a href={"https://www.google.co.in/"}>
          <img
            src={require("../../assets/images/eyes.jpg")}
            className="w-screen"
            alt="shoe image"
          />
        </a>
      </div>
      <div className="">
        <p className="font-semibold text-xl hover:text-indigo-500 text-center">
          First Look
        </p>
        <h4 className="text-l hover:text-indigo-500 text-center mt-1 ">
          NIKE AIR MAX PULSE
        </h4>
        <div className="text-wrap text-base text-center items-center mt-3 ">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4">
        <Buttons title={"Notify Me"} />
        <Buttons title={"Shop Air Max"} />
      </div>
      <div className="  mx-5">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Best of Air Max</p>
          <ProductSlider
            prevItem={() => console.log("this is prev")}
            title={"Shop"}
          />
        </div>
      </div>
      <Carausel handleClick={handleClick} />
    </div>
  );
};

export default Home;
