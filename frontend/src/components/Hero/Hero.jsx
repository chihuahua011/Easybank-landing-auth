import React from "react";
import "./Hero.css";
import BgPlanes from "../../images/bg-intro-desktop.svg";
import Mockups from "../../images/image-mockups.png";

const Hero = () => {
  return (
    <section id="heroSection">
      <div className="heroWrap">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </div>
      <img src={BgPlanes} alt="" />
    </section>
  );
};

export default Hero;
