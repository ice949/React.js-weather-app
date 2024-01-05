import React from "react";
import sun from "../../Assets/sun.png";

const WeeklyForecast = () => {
  return (
      <section className="second-column">
        <h3>7 Day Forecast</h3>
        <div className="weekly-forecast-container">
          <div className="weekly-forecast">
            <h4>Monday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Tuesday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Wednesday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Thursday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Friday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Saturday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
          <div className="weekly-forecast">
            <h4>Sunday</h4>
            <div className="day-forecast">
              <img src={sun} alt="" />
              <p>Cloudy</p>
            </div>
            <p>31°C</p>
          </div>
        </div>
      </section>
  );
};

export default WeeklyForecast;
