import React, { useState, useEffect } from "react";
import "./MainComponent.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AirConditions from "../AirConditions/AirConditions";
import DayOverview from "../Overview/DayOverview";
import { getWeatherByCityName } from "../../Functions/GetWeatherData";

const MainComponent = () => {
    const [cityName, setCityName] = useState('');
    const [cityWeatherData, setCityWeatherData] = useState(null);

    useEffect (() => {
        getWeatherByCityName('accra', setCityWeatherData)
    }, [])

    console.log(cityWeatherData)

    if (cityWeatherData) {
        
  
  return (
    <section className="MainComponent">
      <section className="first-column">
        <SearchComponent cityName={cityName} setCityName={setCityName} getWeatherByCityName={getWeatherByCityName} setCityWeatherData={setCityWeatherData} />
        <DayOverview cityWeatherData={cityWeatherData} />
        <DailyForecast />
        <AirConditions cityWeatherData={cityWeatherData} />
      </section>
      <WeeklyForecast />
    </section>
  );}
};

export default MainComponent;
