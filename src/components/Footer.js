import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Bhubneswar,Odisha</p>
              <p>India</p>
            </div>
          </div>
          <div className="Phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-7008907394
            </h4>
          </div>
          <div className="email">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkjxQzMXbXVmGZFqmbTqglDRnhDxXThHLRKwDhfhQtDHZWstmKDwXQKrDNzJnltpmjHLjw">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                chinmayasahoo.v1@gmail.com
              </h4>
            </a>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Chinmaya Sahoo. An aspiring FullStack-Web-Developer with
            1000+ hours of coding experience in JavaScript. I'm a highly
            passionate Backend developer, who loves creating APIs and working
            with Database. I enjoy discussing new projects and challenges.
          </p>

          <div className="social">
            <a href="https://www.instagram.com/chinmaya_________________/">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/Chinmaya_Sahoo_?t=6t3gqggJZXP9VA6WMuZglQ&s=09">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/chinmaya-sahoo-28b44523a/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
