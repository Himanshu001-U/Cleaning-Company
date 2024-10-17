import React from "react";
import "./Customer.css";

function Customer() {
  return (
    <>
      <div className="customer">
        <h3>TESTIMONIES</h3>
        <h1>Happy Customers </h1>
        <div className="boxes">
          <div className="box1">
            <h1>Mr. Arun Kumar</h1>
            <p>
              I recently hired Sparkle Clean Co. for a deep cleaning of my home,
              and I couldn't be happier with the results! From the moment I
              scheduled the appointment, their customer service was top-notch.
              The team arrived on time, fully equipped, and ready to tackle
              every corner of my house.
            </p>
          </div>
          <div className="box2">
            <h1>Mr. Deepak Kumar</h1>
            <p>
              They were incredibly thorough, paying attention to detail that I
              didn’t even think to mention. My kitchen and bathrooms have never
              looked better! I was particularly impressed with how they handled
              my delicate surfaces and ensured everything was cleaned without
              damage.
            </p>
          </div>
          <div className="box3">
            <h1>Mr. Rohan Kumar</h1>
            <p>
              the most was their professionalism and friendly demeanor. They
              made the whole process enjoyable. I will definitely be using
              Sparkle Clean Co. again and highly recommend them to anyone in
              need of a reliable cleaning service. Thanks for making my home
              shine!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
