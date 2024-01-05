import React, { useState } from "react";
import "./MainComponent.css";
import { FaTemperatureHigh, FaWind, FaWater, FaSun } from "react-icons/fa";
import sun from "../../Assets/sun.png";
import SearchComponent from "../SearchComponent/SearchComponent";

const MainComponent = () => {
  return (
    <section className="MainComponent">
      <section className="first-column">
        <SearchComponent />
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
        <div className="second-row">
          <h2>Today's Forecast</h2>
          <div className="tri-hourly-container">
            <div className="tri-hourly">
              <h4>6AM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
            <div className="tri-hourly">
              <h4>12PM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
            <div className="tri-hourly">
              <h4>3PM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
            <div className="tri-hourly">
              <h4>6PM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
            <div className="tri-hourly">
              <h4>9PM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
            <div className="tri-hourly">
              <h4>12AM</h4>
              <img src={sun} alt="" />
              <p>31°C</p>
            </div>
          </div>
        </div>
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
      </section>
      <section className="second-column">
        <h1>Weather App</h1>
      </section>
    </section>
  );
};

export default MainComponent;
