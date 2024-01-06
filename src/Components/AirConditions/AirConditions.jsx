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
            <p>{cityWeatherData.current.feelslike_c}°C</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWind />
          <div>
            <h4>Wind</h4>
            <p>{cityWeatherData.current.wind_kph}km/h</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWater />
          <div>
            <h4>Humidity</h4>
            <p>{cityWeatherData.current.humidity}%</p>
          </div>
        </div>
        <div className="air-condition">
          <FaSun />
          <div>
            <h4>UV Index</h4>
            <p>{cityWeatherData.current.uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
