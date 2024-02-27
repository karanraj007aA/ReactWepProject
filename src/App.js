import logo from "./logo.svg";
import "./App.css";

import { lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./screens/login";
import Registration from "./screens/registration";
import Home from "./screens/Home/Home";
import { auth } from "./firebase/firebase";
import { setUserId } from "firebase/analytics";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductDetails from "./screens/productDetails";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate("/home");
    }
  }, []);
  const token = localStorage.getItem("user");
  console.log("Screen mounted");

  return (
    <Provider store={store}>
      <Routes>
        <Route
          exact={true}
          isPublic={true}
          path={"/"}
          name={"Registration"}
          element={<Registration />}
        />
        <Route
          exact={true}
          isPublic={true}
          path={"/login"}
          name={"Login"}
          element={<Login />}
        />
        <Route
          exact={true}
          isPublic={true}
          path={"/home"}
          name={"Home"}
          element={<Home />}
        />
        <Route
          exact={true}
          isPublic={true}
          path={"/productDetails"}
          name={"ProductDetails"}
          element={<ProductDetails />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
