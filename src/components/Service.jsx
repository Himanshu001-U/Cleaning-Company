import React from "react";
import "./Service.css";
import Project from './Project'

function Service() {
  return (
    <div className="container">
      <div className="service">
        <h3>Services</h3>
        <h1>How We Works</h1>
      </div>
      <div className="service-content">
        <div className="service-content-1">
          <h1>House Keeping</h1>
          <p>
            We are an Up Growing Market leader in commercial cleaning, support
            services & service management with a proven performance record. We
            offer our clients a be spoke & competitive service package, which is
            not just a standardized service package. Our approach to service
            management is based on a close ongoing development process with our
            clients.
          </p>
          <button>Read More</button>
        </div>
        <div className="service-content-2">
          <h1>Office Cleaning</h1>
          <p>
            We maintain & clean all types of offices & commercial premises and
            have built up masses of experience dealing with a broad client base
            over the last Three years.
          </p>
          <button>Read More</button>
        </div>
        <div className="service-content-3">
          <h1>Carpet Cleaning</h1>
          <p>
            We will offer you an excellent service with all the backups you
            would expect from a Professional company at an excellent price.
          </p>
          <button>Read More</button>
        </div>
        <div className="service-content-4">
          <h1>Kitchen Cleaning</h1>
          <p>
            We have outstanding track record based on when choosing GMP you know
            you can relax & get on with your core business. We take a proactive
            NOT a reactive approach to support & cleaning services ensuring your
            premises will look & run at their best all the time.
          </p>
          <button>Read More</button>
        </div>
        <div className="service-content-5">
          <h1>Guest Room Cleaing</h1>
          <p>
            We are an Up Growing Market leader in commercial cleaning, support
            services & service management with a proven performance record. We
            offer our clients a be spoke & competitive service package, which is
            not just a standardized service package. Our approach to service
            management is based on a close ongoing development process with our
            clients.
          </p>
          <button>Read More</button>
        </div>
        <div className="service-content-6">
          <h1>Farm Cleaning</h1>
          <p>
            We are an Up Growing Market leader in commercial cleaning, support
            services & service management with a proven performance record. We
            offer our clients a be spoke & competitive service package, which is
            not just a standardized service package. Our approach to service
            management is based on a close ongoing development process with our
            clients.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <Project/>
    </div>
  );
}

export default Service;
