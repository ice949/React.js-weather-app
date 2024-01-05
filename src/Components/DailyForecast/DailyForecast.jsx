import React from "react";
import sun from "../../Assets/sun.png";

const DailyForecast = () => {
  return (
      
        
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
  );
};

export default DailyForecast;
