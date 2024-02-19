import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import "../screens/index.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Registration logged in");
    const userId = localStorage.getItem("user");
    console.log(userId);
    if (userId != null) {
      navigate("/home");
    }
  });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div
      className="pic"
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
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <br></br>

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
            pattern={emailRegex}
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
            pattern={emailRegex}
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
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            Alerady have an Account?
            <NavLink to={"/login"}>Sign In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
