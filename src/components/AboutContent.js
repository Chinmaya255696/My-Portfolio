import "./AboutContentStyles.css";

import React from "react";
import {Link} from "react-router-dom"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a Nodejs Backend Web-Devloper. I'm a highly passionate Backend
          developer, who loves creating APIs and working with Database.
        </p>
      </div>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      <div className="right">
      <div className="img-container">
      <div className="img-stack top">
        <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img" alt="true"
        />
      </div>
      <div className="img-stack bottom">
        <img src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img" alt="true"
        />
      </div>

      </div>

      </div>
    </div>
  );
};

export default AboutContent;
