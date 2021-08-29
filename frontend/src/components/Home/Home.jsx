import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "../../images/logo.svg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import LandPage from "../Landingpage/LandPage";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [logged, setLogged] = useState("loggedOUT");
  const [userName, setUserName] = useState("");
  const [hamMenu, setHamMenu] = useState("hamMenuClosed");
  const [overlay, setOverlay] = useState("overlayClosed");
  const [regButton, setRegButton] = useState("closedRegBtn");
  const [logButton, setLogButton] = useState("closedLogBtn");

  const token = localStorage.getItem("token")
  console.log(token)

  useEffect (() => {
    axios.post("http://localhost:8000/api/user", {
      token: token
    })
    .then((res) => {
      if(res.status === 200) {
        console.log(res.data)
        setLogged("loggedIN")
        setUserName(res.data.user.name)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [token]);

  //The logout function to remove the token from the local storage
  const logOutFunc = () => {
    localStorage.removeItem("token")
    setLogged("loggedOUT")
    window.location.reload();
  }

  //The onClick event for the logout
  const logOut = () => {
    axios.post("http://localhost:8000/api/user", {
      token: token
    })
    .then((res) => {
      if(res.status === 200) {
        setTimeout(logOutFunc, 500)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const click = () => {
    if(hamMenu === "hamMenuClosed") {
      setHamMenu("hamMenu");
      setOverlay("overlay");
      setLogButton("openLogBtn");
      setRegButton("openRegBtn")
    } else {
      setHamMenu("hamMenuClosed");
      setOverlay("overlayClosed");
      setLogButton("closedLogBtn");
      setRegButton("closedRegBtn")
    }
  }

  return (
    <Router>
      <div className="header">
        <img src={Logo} alt="" />
        <div className="headerBg"></div>
        <div className="linksCont" id={hamMenu}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Careers</Link>
        </div>
        <Link id="regBtn" to="/register" className={logged + " " + regButton}>Register</Link>
        <Link id="logBtn" to="/login" className={logged + " " + logButton}>Login</Link>
        <p className={logged}>Welcome back {userName}!</p>
        <button id="logOut" className={logged} onClick={logOut}>Log out</button>
        <button className="hamBtn" onClick={click}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="overlay" id={overlay}></div>
      </div>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <LandPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
