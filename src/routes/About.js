import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutlogo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import homeIcon from "../assets/home.png";

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

        <h2 className="about-mission">Mission</h2>
        <p className="about-text">
          To offer top-notch level of gaming experience in the Philippine Market equipped with High-End computers, fast internet connection in a comfortable ambiance with affordable
            value.</p>
        <p className="about-text">
          In line with our campaign to elevate the standard of ICafes in our country, we also strive to uplift electronic sports in the whole SEA region.</p>
        <p className="about-text">
          With events that will give way to amateur teams in their path to success.</p>

        <h3 className="about-vision">Vision</h3>
        <p className="about-text">
          To maintain our leadership in both the ICafe and eSports industry by providing available resources in enhancing our service through research and innovation.</p>
        <p className="about-text">
          TNC also envisions itself asserting its advocacy of professionalism in the eSports gaming industry in our country.</p>
      </div>
    </div>
  );
}

export default About;
