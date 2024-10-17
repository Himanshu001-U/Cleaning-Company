import React from "react";
import "./Training.css";
import work3 from '../assets/images/work-3.jpg'
import work4 from '../assets/images/work-4.jpg'
import work6 from '../assets/images/work-6.jpg'

function Training() {
  return (
    <>
      <div className="training">
        <div className="images">
            <img src={work3} alt="" />
            <img src={work4} alt="" />
            <img src={work6} alt="" />
        </div>
        <div className="content">
          <h1>Training</h1>
          <p>
            We utilize Management and Staff development programs in order to
            help every member to realize his or her potential and create a
            motivating work environment.
            <br />
             <h2>Staff Training</h2> We offer comprehensive
            hands-on programs as well as multi-media training sessions to your
            staff. Initial training programs are utilized upon our arrival at
            your facility. However, on going development sessions are conducted
            as well. This way, learning never stops and new strengths are
            constantly being developed, providing you with greater service.
            <br />
            <br />
            Staff is developed to uphold the high standards of quality that we
            require and you deserve. In addition, all staff members are trained
            to meet the requirements of all state and federal regulatory
            agencies.
            <br />
            <br />
             <h2>Management Training</h2> Before any member of our team arrives
            at your facility, they undergo a comprehensive training and
            development program at our Training Institute. During this program,
            candidate managers complete hands-on and multimedia sessions for
            every aspect of our industry-leading systems. From payroll
            management to floor care, we develop leadership in all areas of
            management. This foundation, combined with our multi-tiered
            mentoring programs, provides your facility with High-caliber
            managers that can integrate seamlessly into your facility and
            provide the highest quality results.
            <br />
            <br />
             <h2>Safety Training</h2> We value the
            safety of our employees, your staff, and your guests above all else.
            We will implement a Comprehensive training program for the HR
            department at your facility. Daily safety meetings with the
            housekeeping staff combined with an Employee Safety Incentive
            program help to create a safe environment.
          </p>
        </div>
      </div>
    </>
  );
}

export default Training;
