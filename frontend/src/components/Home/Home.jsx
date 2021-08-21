import React from "react";
import "./Home.css";
import Logo from "../../images/logo.svg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../Register/Register";
import LandPage from "../Landingpage/LandPage";

const Home = () => {
  return (
    <Router>
      <div className="header">
        <img src={Logo} alt="" />
        <div className="linksCont">
          <Link to="/">Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Careers</Link>
        </div>
        <Link id="regBtn" to="/register">Register</Link>
      </div>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LandPage />
        </Route>
      </Switch>
    </Router>
  );
};

function RegisterPage() {
  return <Register />
}

function LandingPage() {
  return <LandPage />
}

export default Home;
