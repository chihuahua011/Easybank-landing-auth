import React, { useState } from "react";
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png";
import { useHistory } from "react-router";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import decode from "jwt-decode"

const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const history = useHistory();

  const redirect = () => {
    history.push("/");
    window.location.reload();
  };

  const logSubmit = () => {
    axios
      .post("http://localhost:8000/api/login", {
        email: logEmail,
        password: logPass,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          setTimeout(redirect, 500);
          console.log(res.data);
          console.log(decode(res.data.token))
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "Missing input")
          toast.error("Please fill out all fields!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        if (err.response.data.msg === "invalid user")
          toast.error("Invalid credentials!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
      });
  };

  return (
    <section id="logSection">
      <div id="regCont">
        <p className="regP">Login to your account</p>
        <input
          className="input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setLogEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setLogPass(e.target.value)}
        />
        <button className="logSubmit" onClick={logSubmit}>
          Login
        </button>
      </div>
      <img className="mockups" src={Mockups} alt="" />
      <img className="bgPlanes" src={BgPlanes} alt="" />
      <div className="regBg"></div>
      <ToastContainer />
    </section>
  );
};

export default Login;
