import React from 'react';
import './SearchComponent.css';
import { FaSearch } from "react-icons/fa";


const SearchComponent = ({cityName, setCityName, getWeatherByCityName, setCityWeatherData}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherByCityName(cityName, setCityWeatherData);
    }

  return (
    <div className="SearchComponent">
        <form className="search-form" onSubmit={(e) => {handleSubmit(e)}} >
        <input type="text" value={cityName} onChange={(e) => {setCityName(e.target.value)}} placeholder='Enter City Name' />
        <button type="submit" className="search-button" ><FaSearch /></button>
        </form>
    </div>
  );
}

export default SearchComponent;