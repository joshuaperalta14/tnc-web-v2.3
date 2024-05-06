import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../pages/Settings.css';

const CompanyProfileSettings = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [industry, setIndustry] = useState('');
  const [foundedYear, setFoundedYear] = useState('');
  
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');

  const handleSaveCompanyProfile = () => {
    alert('Company profile saved successfully!');
  };

  return (
    <div className="settings-background">
      <Sidebar />
    <div className="settings-profile-container">
      <h1 className="settings-title">
        Profile Settings&nbsp;
        <FontAwesomeIcon icon={faUserCircle} className="settings-icon" />
      </h1>
      <div className="setting">
        <label className="settings-label">Company Name:</label>
        <input className="settings-input" type="text" placeholder="Enter the name of your company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Address:</label>
        <input className="settings-input" type="text" placeholder="Enter your full address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Phone Number:</label>
        <input className="settings-input" type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Industry:</label>
        <input className="settings-input" type="text" placeholder="Enter your job industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Founded Year:</label>
        <input className="settings-input" type="text" placeholder="Enter the year it started" value={foundedYear} onChange={(e) => setFoundedYear(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Website:</label>
        <input className="settings-input" type="text" placeholder="Enter your website link" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Email:</label>
        <input className="settings-input" type="text" placeholder="Enter your e-mail address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Number of Employees:</label>
        <input className="settings-input" type="text" placeholder="Enter the number of employees" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />
      </div>

      <button className="settings-button" onClick={handleSaveCompanyProfile}>Save Profile Settings</button>
    </div>
    </div>
  );
};

export default CompanyProfileSettings;