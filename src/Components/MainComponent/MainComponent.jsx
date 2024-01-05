import React, { useState } from "react";
import "./MainComponent.css";
import { FaTemperatureHigh, FaWind, FaWater, FaSun } from "react-icons/fa";
import sun from "../../Assets/sun.png";
import SearchComponent from "../SearchComponent/SearchComponent";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AirConditions from "../AirConditions/AirConditions";
import DayOverview from "../Overview/DayOverview";

const MainComponent = () => {
  return (
    <section className="MainComponent">
      <section className="first-column">
        <SearchComponent />
        <DayOverview />
        <DailyForecast />
        <AirConditions />
      </section>
      <WeeklyForecast />
    </section>
  );
};

export default MainComponent;
