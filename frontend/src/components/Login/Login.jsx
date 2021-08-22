import React, { useState } from "react";
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [logEmail, setLogEmail] = useState("");
    const [logPass, setLogPass] = useState("");

  const logSubmit = () => {
      axios.post("http://localhost:8000/api/login", {
          email: logEmail,
          password: logPass
      })
      .then((res) => {
          console.log(res)
      })
      .catch((err) => {
          console.log(err)
      })
  };

  return (
    <section id="logSection">
      <div id="regCont">
        <p className="regP">Login to your account</p>
        <input className="input" type="emial" placeholder="Email" required onChange={(e) => setLogEmail(e.target.value)} />
        <input className="input" type="text" placeholder="Password" required onChange={(e) => setLogPass(e.target.value)} />
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
