import React from 'react';
import "./Introduction.css";
import IcoOnline from "../../images/icon-online.svg";
import IcoBudget from "../../images/icon-budgeting.svg";
import IcoOnboard from "../../images/icon-onboarding.svg";
import IcoApi from "../../images/icon-api.svg";

const Introduction = () => {
    return (
        <section id="introSect">
            <div id="introWrap">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.</p>
            </div>
            <div className="introList">
                <div className="listItem">
                    <img src={IcoOnline} alt="online" />
                    <h2>Online Banking</h2>
                    <p>Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.</p>
                </div>
                <div className="listItem">
                    <img src={IcoBudget} alt="budget" />
                    <h2>Simple Budgeting</h2>
                    <p>See exactly where your money goes each month. Recieve notifications
            when you're close to hitting your limits.</p>
                </div>
                <div className="listItem">
                    <img src={IcoOnboard} alt="onboard" />
                    <h2>Fast Onboarding</h2>
                    <p>We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.</p>
                </div>
                <div className="listItem">
                    <img src={IcoApi} alt="api" />
                    <h2>Open API</h2>
                    <p>Manage your saving, investments, pension, and much more from one
            account. Tracking your money has never been easier.</p>
                </div>
            </div>        
        </section>
    )
}

export default Introduction
