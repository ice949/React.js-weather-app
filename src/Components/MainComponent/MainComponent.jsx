import React, { useState } from "react";
import "./MainComponent.css";
import { FaTemperatureHigh, FaWind, FaWater, FaSun } from "react-icons/fa";
import sun from "../../Assets/sun.png";
import SearchComponent from "../SearchComponent/SearchComponent";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AirConditions from "../AirConditions/AirConditions";

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
        <DailyForecast />
        <AirConditions />
      </section>
      <WeeklyForecast />
    </section>
  );
};

export default MainComponent;
