import React, { useState } from "react";
import "./Register.css";
import { useHistory } from 'react-router';
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const history = useHistory();

  const redirect = () => {
    return history.push("/login")
  }

  const regSubmit = () => {
    axios
      .post("https://easybank.sloppy.zone/api/register", {
        name: regName,
        email: regEmail,
        password: regPass,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("Registration success")
          setTimeout(redirect, 500)
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "Already registered email")
          toast.error("Already registered user!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        if (err.response.data.msg === "Password too short")
          toast.error("Password should be at least 6 characters long!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        if (err.response.data.msg === "Fill out all inputs")
            toast.error("Please fill out all fields!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        if (err.response.status === 500)
          toast.error("Data could not be processed!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
      });
  };

  return (
    <>
      <section id="regSection">
        <div id="regCont">
            <p className="regP" >Registration form</p>
          <input
            required
            className="input"
            type="text"
            placeholder="Name"
            onChange={(e) => setRegName(e.target.value)}
          />
          <input
            required
            className="input"
            type="email"
            placeholder="Email"
            onChange={(e) => setRegEmail(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setRegPass(e.target.value)}
          />
          <button className="regSubmit" onClick={regSubmit}>
            Submit
          </button>
          <p className="regPBottom" >All fields are required!</p>
        </div>
        <img className="mockups" src={Mockups} alt="" />
        <img className="bgPlanes" src={BgPlanes} alt="" />
        <div className="regBg"></div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
