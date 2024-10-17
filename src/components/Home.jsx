import React from "react";
import "./Home.css";
import Work2 from "../assets/images/work-2.jpg";
import Register from "../components/Register"
function Home() {
  return (
    <div className="home">
      <div className="main">
        <p>Leave the house cleaning chores to us</p>
        <h1>Let us do the dirty work, so you don't have to.</h1>
        <button>LEARN MORE</button>
      </div>
      <div className="about">
        <div className="img">
          <img src={Work2} alt="" />
        </div>
        <div className="info">
          <h2>Welcome to cleaning company</h2>
          <h1>Let's make you fresher than ever</h1>
          <p>
            GMP made their presence in the market. From the beginning we have
            grown into a much-appreciated professional set-up offering all the
            services, which fall under the preview of maintenance of an entire
            building. GMP is a one stop shop providing reliable & quality
            maintenance services.
          </p>
        </div>
        <div className="box">
          <h2 className="head">Commercial Cleaning</h2>
          <p className="para">
            We have outstanding track record based on when choosing GMP you know
            you can relax & get on with your core business. We take a proactive
            NOT a reactive approach to support & cleaning services ensuring your
            premises will look & run at their best all the time.
          </p>
        </div>
        <div className="box">
          <h2 className="head">Office Cleaning</h2>
          <p className="para">
            We are an Up Growing Market leader in commercial cleaning, support
            services & service management with a proven performance record. We
            offer our clients a be spoke & competitive service package, which is
            not just a standardized service package. Our approach to service
            management is based on a close ongoing development process with our
            clients.
          </p>
        </div>
        <Register />
      </div>
      <div className="exp">
        <h1>OUR EXPERIENCE</h1>
          <div className="exp1">
            <h1>45</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="exp2">
            <h1>2,342</h1>
            <p>HAPPY CUSTOMER</p>
          </div>
          <div className="exp3">
            <h1>123</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
        </div>
    </div>
  );
}

export default Home;
