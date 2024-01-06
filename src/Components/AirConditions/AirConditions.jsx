import React from "react";
import { FaTemperatureHigh, FaWind, FaWater, FaSun } from "react-icons/fa";

const AirConditions = ({cityWeatherData}) => {
  return (
    <div className="third-row">
      <div className="titles">
        <h4>Air Conditions</h4>
        <a href="#" className="see-more">
          See More{" "}
        </a>
      </div>
      <div className="air-conditions">
        <div className="air-condition">
          <FaTemperatureHigh />
          <div>
            <h4>Feels Like</h4>
            <p>{Math.round((cityWeatherData.main.feels_like - 32) * 5/9)}°C</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWind />
          <div>
            <h4>Wind</h4>
            <p>{cityWeatherData.wind.speed}km/h</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWater />
          <div>
            <h4>Humidity</h4>
            <p>{cityWeatherData.main.humidity}%</p>
          </div>
        </div>
        <div className="air-condition">
          <FaSun />
          <div>
            <h4>UV Index</h4>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
