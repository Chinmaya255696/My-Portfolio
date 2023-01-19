import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a Nodejs Backend Web-Devloper. I'm a highly passionate Backend
          developer, who loves creating APIs and working with Database.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxok8XKSNwXS9PiE1F9CRP30KbdVZV6zrJw&usqp=CAU"
              className="img"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iDq3W_LdWeFPKhWGDvYwT8Ei7p5ZJRtgPA&usqp=CAU"
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
