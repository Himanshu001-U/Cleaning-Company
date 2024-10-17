import React from "react";
import "./Data.css";
import work1 from "../assets/images/work-1.jpg";
import work4 from "../assets/images/work-4.jpg";
import Team from "./Team";
import "./Team.css";

function Data() {
  return (
    <>
      <div className="about">
        <div className="image">
          <img src={work1} alt="" />
          <img src={work4} alt="" />
        </div>
        <div className="data">
          <h1>Welcome to cleaning company</h1>
          <p>
            GMP made their presence in the market. From the beginning we have
            grown into a much-appreciated professional set-up offering all the
            services, which fall under the preview of maintenance of an entire
            building. GMP is a one stop shop providing reliable & quality
            maintenance services for any type of of the Building properties are
            optimally used and maintained. We also act to protect the safety and
            well being of visitors and staff at the Site.
          </p>
          <ul>
            <li>Pantry Service</li>
            <li>Security Service</li>
            <li>HousekeepingService</li>
            <li>Laundry Service</li>
          </ul>
        </div>
        <div className="boxes">
          <div className="box1">
            <h1>Mr. Arun Saxena</h1>
            <p>
              I recently hired Sparkle Clean Co. for a deep cleaning of my home,
              and I couldn't be happier with the results! From the moment I
              scheduled the appointment, their customer service was top-notch.
              The team arrived on time, fully equipped, and ready to tackle
              every corner of my house.
            </p>
          </div>
          <div className="box2">
            <h1>Mr. Deepak Singh</h1>
            <p>
              They were incredibly thorough, paying attention to detail that I
              didn’t even think to mention. My kitchen and bathrooms have never
              looked better! I was particularly impressed with how they handled
              my delicate surfaces and ensured everything was cleaned without
              damage.
            </p>
          </div>
        </div>

        <div className="boxes">
          <div className="box3">
            <h1>Mr. Rohan Gupta</h1>
            <p>
              the most was their professionalism and friendly demeanor. They
              made the whole process enjoyable. I will definitely be using
              Sparkle Clean Co. again and highly recommend them to anyone in
              need of a reliable cleaning service. Thanks for making my home
              shine!
            </p>
          </div>
          <div className="box2">
            <h1>Mr. Abhinav Kumar</h1>
            <p>
              They were incredibly thorough, paying attention to detail that I
              didn’t even think to mention. My kitchen and bathrooms have never
              looked better! I was particularly impressed with how they handled
              my delicate surfaces and ensured everything was cleaned without
              damage.
            </p>
          </div>
        </div>
        <Team/>
      </div>
    </>
  );
}

export default Data;
