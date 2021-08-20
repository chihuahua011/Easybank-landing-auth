import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Careers</Link>
            </div>
        <Link>Register</Link>
      </Router>
    )
}

export default Home
