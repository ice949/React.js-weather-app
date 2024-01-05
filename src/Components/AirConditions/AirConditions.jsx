import React from "react";
import { FaTemperatureHigh, FaWind, FaWater, FaSun } from "react-icons/fa";

const AirConditions = () => {
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
            <p>8°C</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWind />
          <div>
            <h4>Wind</h4>
            <p>0.2Km/h</p>
          </div>
        </div>
        <div className="air-condition">
          <FaWater />
          <div>
            <h4>Chance of rain</h4>
            <p>0%</p>
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
