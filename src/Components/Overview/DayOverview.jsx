import React from "react";
import sun from "../../Assets/sun.png";

const DayOverview = () => {
  return (
        <div className="first-row">
          <div className="details">
            <div>
              <h2>Madrid</h2>
              <p>Chance of Rain 0%</p>
            </div>
            <h3>31°C</h3>
          </div>
          <div>
            <img src={sun} alt="" />
          </div>
        </div>
  );
};

export default DayOverview;
