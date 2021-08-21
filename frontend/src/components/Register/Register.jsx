import React, { useState } from "react";
import "./Register.css";
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const regSubmit = async () => {
    axios
      .post("http://localhost:8000/api/register", {
        name: regName,
        email: regEmail,
        password: regPass,
      })
      .then(await function(res) {
        if (res.status === 201)
          toast.success("Successful registration", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
      })
      .catch((err) => {
        if (err.response.status === 400)
          toast.error("Already registered user!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        if (err.response.status === 409)
            toast.error("Please fill out all fields!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
      });
  };

  return (
    <>
      <section id="regSection">
        <div id="regCont">
            <p>Registration form</p>
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
            type="text"
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
          <p>All fields are required!</p>
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
