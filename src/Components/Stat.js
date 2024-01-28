import React from "react";
import "../CSS/Stat.css";
const Stat = () => {
  return (
    <div className="stats">
      <div className="sous-stat">
        <div className="stat-intro">
          <h1>The world's biggest healthcare platform</h1>
          <p>
            We work from 9 offices all over the world, bringing Docplanner Group
            to life in 13 countries.
          </p>
          <img
            src="https://docplanner-gomycode.onrender.com/logos/logocropped.png"
            alt=""
          />
        </div>
        <div className="stat">
          <div className="mini-stat block1">
            <img src="https://www.docplanner.com/img/flag.png" alt="" />
            <h3>Leader in 13 countries</h3>
            <p>
              Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia,
              Czech Republic, Portugal, Argentina, Peru and Chile
            </p>
          </div>
          <div className="mini-stat block2">
            <img src="https://www.docplanner.com/img/visits.png" alt="" />
            <h3>15,000,000 appointments</h3>
            <p>booked last month</p>
          </div>
          <div className="mini-stat block3">
            <img src="https://www.docplanner.com/img/patients.png" alt="" />
            <h3>90,000,000 patients</h3>
            <p>visit our websites each month</p>
          </div>
          <div className="mini-stat block4">
            <img src="https://www.docplanner.com/img/doctors.png" alt="" />
            <h3>210,000 active doctors</h3>
            <p>trust our solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
