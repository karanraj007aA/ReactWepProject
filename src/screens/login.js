import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import "../screens/index.css";
import { updateLogin } from "../redux/slice/homeSlice";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("sucess login", user);
        dispatch(updateLogin(true));
        localStorage.setItem("user", JSON.stringify(user.uid));

        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error message", errorMessage);
        // console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div
      className="pic2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

        backgroundSize: "cover",
        backgroundColor: "tomato",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "15px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <br />
          <input
            type="submit"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
