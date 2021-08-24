import React from "react";
import "./Articles.css";
import Currency from "../../images/image-currency.jpg";
import Restaurant from "../../images/image-restaurant.jpg";
import Plane from "../../images/image-plane.jpg";
import Confetti from "../../images/image-confetti.jpg";

const Articles = () => {
  return (
    <section id="articleSect">
      <div id="articleWrap">
        <h1>Latest Articles</h1>
        <div id="artList">
          <div className="artListWrap">
            <img src={Currency} alt="currency" />
            <p>By Claire Robinson</p>
            <a href="">Recieve money in any currency with no fees</a>
            <p>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only recieve money in a single ...
            </p>
          </div>
          <div className="artListWrap">
            <img src={Restaurant} alt="restaurant" />
            <p>By Wilson Hutton</p>
            <a href="">Treat yourself without worrying about money</a>
            <p>
              Our sinple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ...
            </p>
          </div>
          <div className="artListWrap">
            <img src={Plane} alt="plane" />
            <p>By Claire Robinson</p>
            <a href="">Take your Easybank card wherever you go</a>
            <p>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you ...
            </p>
          </div>
          <div className="artListWrap">
            <img src={Confetti} alt="confetti" />
            <p>By Claire Robinson</p>
            <a href="">Our invite-only Beta accounts are now live!</a>
            <p>
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
