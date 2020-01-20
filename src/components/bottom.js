import React from 'react';
import service_img from "../images/undraw_businesswoman_pc12.svg";
import bottom from "../images/content-bottom-bg1.png";


export default () => {
  return (
    <div className="w-100 bg-no-repeat bg-white bg-cover text-center pt-8 pb-32" style={{ backgroundImage: `url(${bottom})` }}>
      <h4 className="text-4xl mt-8">
        Automatic Release Notes. Zero Effort.
      </h4>
      <p>Sign up today with instant, no-hassle setup. No credit card required!</p>
      <a href="https://my.nextrelease.io" className="btn btn-orange mt-4 inline-block">Sign Up Now</a>
    </div>
  )
}