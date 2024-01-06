import React from "react";
import sun from "../../Assets/sun.png";

const DayOverview = ({cityWeatherData}) => {
  return (
        <div className="first-row">
          <div className="details">
            <div>
              <h2>{cityWeatherData.name}</h2>
              <p>Chance of Rain 0%</p>
            </div>
            <h3>{Math.round((cityWeatherData.main.temp - 32) * 5/9)}°C</h3>
          </div>
          <div>
            <img src={sun} alt="" />
          </div>
        </div>
  );
};

export default DayOverview;
