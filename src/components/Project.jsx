import React from "react";
import "./Project.css";
import work1 from "../assets/images/work-1.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-3.jpg";
import work4 from "../assets/images/work-4.jpg";
import work5 from "../assets/images/work-5.jpg";
import work6 from "../assets/images/work-6.jpg";

function Project() {
  return (
    <>
      <div className="project">
        <h3>Our Projects</h3>
        <h1>We have done many latest cleaning projects</h1>

        <div className="project-content">
          <div className="project1">
            <img src={work5} alt="" />
          </div>
          <div className="project2">
            <img src={work1} alt="" />
          </div>
          <div className="project3">
            <img src={work2} alt="" />
          </div>
          <div className="project4">
            <img src={work3} alt="" />
          </div>
          <div className="project5">
            <img src={work4} alt="" />
          </div>
          <div className="project6">
            <img src={work6} alt="" />
         </div>
        </div>
      </div>
    </>
  );
}

export default Project;
