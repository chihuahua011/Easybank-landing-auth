import React from 'react';
import "./Register.css";
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png"

const Register = () => {
    return (
        <>
        <section id="regSection">
            <div id="regCont">
                <input className="input" type="text" placeholder="Name" />
                <input className="input" type="text" placeholder="Email" />
                <input className="input" type="text" placeholder="Password" />
                <button className="regSubmit" >Submit</button>
            </div>
            <img className="mockups" src={Mockups} alt="" />
            <img className="bgPlanes" src={BgPlanes} alt="" />
            <div className="regBg"></div>
        </section>
        </>
    )
}

export default Register
