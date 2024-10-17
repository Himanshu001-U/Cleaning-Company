import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import pic from "../assets/images/pic1.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={pic} alt="" />
        <h2>Cleaning Company</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" style={{ fontSize: '22px' }}>Home</Link>
          </li>
          <li>
            <Link to="/About" style={{ fontSize: '22px' }}>About</Link>
          </li>
          <li>
            <Link to="/pricing" style={{ fontSize: '22px' }}>Pricing</Link>
          </li>
          <li>
            <Link to="/training" style={{ fontSize: '22px' }}>Training</Link>
          </li>
          <li>
            <Link to="/services" style={{ fontSize: '22px' }}>Services</Link>
          </li>
          <li>
            <Link to="/blog" style={{ fontSize: '22px' }}>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
