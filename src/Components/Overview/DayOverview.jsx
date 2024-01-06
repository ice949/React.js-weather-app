import React from "react";
import sun from "../../Assets/sun.png";

const DayOverview = ({cityWeatherData}) => {
  return (
        <div className="first-row">
          <div className="details">
            <div>
              <h2>{cityWeatherData.location.name}, {cityWeatherData.location.country}</h2>
              <p>{cityWeatherData.current.condition.text}</p>
            </div>
            <h3>{cityWeatherData.current.temp_c}°C</h3>
          </div>
          <div>
            <img src={cityWeatherData.current.condition.icon} alt="" />
          </div>
        </div>
  );
};

export default DayOverview;
