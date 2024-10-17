import React from "react";
import "./Team.css";
import work1 from "../assets/images/work-3.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-1.jpg";

function Team() {
  return (
    <>
      <div className="team">
        <span className="phead">Team and staff</span>
        <h1>Our Team</h1>
        <p>
          The people in our company are our most valuable asset. Every person in
          our organization, from a housekeeping staff member to a corporate
          executive, plays a vital role in our ultimate success. We invest a lot
          of time and energy in our employees in terms of training and
          mentoring. We want our employees to be successful and we know that by
          investing in our people we are ultimately making our company a better
          place to work and grow.As a service company we know that good service
          is founded on well trained, well supported, technically competent
          people.
        </p>
        <br />
        <br />
        <h1>Leadership Team</h1>
        <p>Our directors maintains a very active role in the daily operations. They have
        a vested interested in the direction and success of the company</p>
        <br />
        <br />
        <h1>Management</h1>
        <p>We have some of the most technically competent and experienced
        managers in the industry</p>
        <br />
        <br />
        <h1>Why you Select Genius Manpower</h1>
        <ul>
          <li>We Use High Quality Cleaning Product</li>
          <li>We Use Machine on Saturday and Sunday for Cleaning</li>
          <li>We Have a Team which have more then 6 year Experience</li>
        </ul>
        <br />
        <button>VIEW ALL STAFF</button>
        <br />
        
      </div>
      <div className="team-members">
          <div className="member1">
            <img src={work1} alt="" />
            <h2>Chloie jane</h2>
          </div>
          <div className="member2">
            <img src={work2} alt="" />
            <h2>Drake taine</h2>
          </div>
          <div className="member3">
            <img src={work3} alt="" />
            <h2>Fartein crinb</h2>
          </div>
        </div>
    </>
  );
}

export default Team;
