import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "../../images/logo.svg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import LandPage from "../Landingpage/LandPage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [logged, setLogged] = useState("loggedOUT");
  const [userName, setUserName] = useState("");

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

  return (
    <Router>
      <div className="header">
        <img src={Logo} alt="" />
        <div className="linksCont">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Careers</Link>
        </div>
        <Link id="regBtn" to="/register" className={logged}>Register</Link>
        <Link id="logBtn" to="/login" className={logged}>Login</Link>
        <p className={logged}>Welcome back {userName}!</p>
        <button id="logOut" className={logged} onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
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
