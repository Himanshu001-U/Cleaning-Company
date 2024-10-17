import React from "react";
import "./News.css";
import work1 from '../assets/images/work-1.jpg'
import work2 from '../assets/images/work-2.jpg'
import work3 from '../assets/images/work-3.jpg'
import work4 from '../assets/images/work-4.jpg'
import work5 from '../assets/images/work-5.jpg'
import work6 from '../assets/images/work-6.jpg'

function News() {
  return (
    <>
      <div className="news">
        <h3>NEWS & BLOGS</h3>
        <h1>Latest News & Blog Posts</h1>
        <div className="news-content">
          <div className="con1">
            <img src={work1} alt="" />
            <h2>Posted by Anuj on 12th Jan 2022</h2>
            <p>
              A side from the hotel staff, your housekeeping staff has more
              interaction with the guests than any other hotel employee.
            </p>
          </div>
          <div className="con2">
            <img src={work2} alt="" />
            <h2>Posted by johnson drew</h2>
            <p>
              Far far away,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Atque illo laborum nisi explicabo dolores qui labore alias
              veniam neque, tempore, rem in, eveniet quibusdam eaque sint
              voluptatibus esse natus corporis! behind the word mountains, far
              from the countries Vokalia and Consonantia.
            </p>
          </div>
          <div className="con3">
            <img src={work3} alt="" />
            <h2>Posted by Marcos Smith</h2>
            <h2>Top 10 tips to clean your window </h2>
            <p>
              Far far away,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Obcaecati, optio. behind the word mountains, far from the
              countries Vokalia and Consonantia.
            </p>
          </div>
          <div className="con1">
            <img src={work4} alt="" />
            <h2>Posted by Anuj on 12th Jan 2022</h2>
            <p>
              A side from the hotel staff, your housekeeping staff has more
              interaction with the guests than any other hotel employee.
            </p>
          </div>
          <div className="con2">
            <img src={work5} alt="" />
            <h2>Posted by johnson drew</h2>
            <p>
              Far far away,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Atque illo laborum nisi explicabo dolores qui labore alias
              veniam neque, tempore, rem in, eveniet quibusdam eaque sint
              voluptatibus esse natus corporis! behind the word mountains, far
              from the countries Vokalia and Consonantia.
            </p>
          </div>
          <div className="con3">
            <img src={work6} alt="" />
            <h2>Posted by Marcos Smith</h2>
            <h2>Top 10 tips to clean your window </h2>
            <p>
              Far far away,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Obcaecati, optio. behind the word mountains, far from the
              countries Vokalia and Consonantia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
