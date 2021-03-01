import React from "react";
import cloud from "../assets/cloud.svg";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <img src={cloud} alt="" className="banner__left--img" />
      </div>
      <div className="banner__right">
        <h2 className="banner__right--title">
          25% off Creative cloud all apps
        </h2>
        <p className="banner__right--content">
          Elevate your ideas and save on the Creative Cloud all apps plan. Was
          <span> ₹4,230.30/mo</span> (incl. GST), now just ₹3,000.08/mo (incl.
          GST).
          <br /> Hurry, sale ends 4 Mar.
        </p>
        <div className="banner__right--buttons">
          <button className="banner__right--buttons-buy-now">Buy now</button>
          <button className="banner__right--buttons-view-more">
            View more offers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
