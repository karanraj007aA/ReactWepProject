import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../screens/login";
import Registration from "../screens/registration";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" Component={<Registration />} />
        <Route path="/login" Component={<Login />} />
      </Routes>
    </Router>
  );
};
export default Navigation;
