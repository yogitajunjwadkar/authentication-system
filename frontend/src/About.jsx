
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-title">
          <p>GET TO KNOW ME</p>
          <h1> <span> About Me</span></h1>
        </div>

        <div className="about-content">

          <div className="about-card">
            <div className="about-icon">💻</div>
            <h2>Who Am I?</h2>

            <p>
              I am a passionate Computer Science graduate and a MERN Stack
              Developer. I enjoy creating websites and web applications
              that are simple, responsive and easy to use.
            </p>

            <p>
              I have worked with HTML, CSS, JavaScript, React.js, Node.js,
              Express.js and MongoDB. I am continuously learning new
              technologies and improving my development skills.
            </p>
          </div>

          <div className="skills-card">
            <h2>My Skills</h2>

            <div className="skill">
              <div>
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress html"></div>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>CSS</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress css"></div>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress js"></div>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>React.js</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress react"></div>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>Node.js / Express</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress node"></div>
              </div>
            </div>

            <div className="skill">
              <div>
                <span>MongoDB</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress mongo"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

