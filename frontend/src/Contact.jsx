import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-container">

        <div className="contact-title">
          <p>GET IN TOUCH</p>
          <h1> <span> Contact Me</span></h1>
          <p>
            Have a project or opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Let's Talk</h2>

            <p>
              I am open to discussing new projects, internship opportunities,
              job opportunities and collaborations.
            </p>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>Yogita@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+91 25485 89657</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>India,Belgaum</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Contact;
