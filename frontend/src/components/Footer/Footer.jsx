import React from 'react';
import "./Footer.css";
import Logo from "../../images/logo-footer.svg";
import Facebook from "../../images/icon-facebook.svg";
import Insta from "../../images/icon-instagram.svg";
import Youtube from "../../images/icon-youtube.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
    return (
        <section id="footerSect">
            <div id="footerWrap">
                <img src={Logo} alt="logo" />
                <div id="icoCont">
                    <img src={Facebook} alt="facebook" />
                    <img src={Insta} alt="insta" />
                    <img src={Youtube} alt="youtube" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Pinterest} alt="pinterest" />
                </div>
                <div className="footerCont">
                    <a href="/">About us</a>
                    <a href="/">Contact</a>
                    <a href="/">Blog</a>
                </div>
                <div className="footerCont">
                    <a href="/">Careers</a>
                    <a href="/">Support</a>
                    <a href="/">Privacy policy</a>
                </div>
                <div className="footerCont">
                    <button id="reqBtn">Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
