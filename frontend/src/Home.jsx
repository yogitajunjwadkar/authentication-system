
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
        <span>  Hi, I'm Yogita</span>
        </h1>

        <h2>Frontend Developer & MERN Stack Developer</h2>

        <p className="hero-text">
          I create modern, responsive and user-friendly web applications
          using React, JavaScript, Node.js, Express and MongoDB.
        </p>

        <div className="hero-buttons">
          <Link to="/about" className="btn primary-btn">
            About Me
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <span>👩‍💻</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

