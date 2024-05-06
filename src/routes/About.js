import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutlogo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import homeIcon from "../assets/home.png";

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {label}
        <span className={`caret ${isOpen? 'caret-open' : ''}`} />
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <Link to="/" className="about-button" title="Go back to main page">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>

      <div className="image-container">
        <img src={aboutlogo} alt="Logo" className="about-logo" />
      </div>
      <div className="description-container">
        <h1 className="about-label">About Our Company</h1>

        <Dropdown label="Mission">
          <legend className="about-mission">Mission</legend>
          <p className="about-text">
            To offer top-notch level of gaming experience in the Philippine Market equipped with High-End computers, fast internet connection in a comfortable ambiance with affordable
            value.
          </p>
          <p className="about-text">
            In line with our campaign to elevate the standard of ICafes in our country, we also strive to uplift electronic sports in the whole SEA region.
          </p>
          <p className="about-text">
            With events that will give way to amateur teams in their path to success.
          </p>
        </Dropdown>

        <Dropdown label="Vision">
          <legend className="about-vision">Vision</legend>
          <p className="about-text">
            To maintain our leadership in both the ICafe and eSports industry by providing available resources in enhancing our service through research and innovation.
          </p>
          <p className="about-text">
            TNC also envisions itself asserting its advocacy of professionalism in the eSports gaming industry in our country.
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

export default About;