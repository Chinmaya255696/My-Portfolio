import "./HeroImgStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/Intro-Img.jpg";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>HI, I'M Chinmaya Sahoo</p>
          <h1> An Aspiring FullStack Devloper.</h1>
          <div>
            <Link to="/project" className="btn">
              Projects 
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>

  );
};

export default HeroImg;
