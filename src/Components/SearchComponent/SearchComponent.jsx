import React, { useState } from 'react';
import './SearchComponent.css';
import { FaSearch } from "react-icons/fa";


const SearchComponent = () => {

    const [cityName, setCityName] = useState('');

  return (
    <div className="SearchComponent">
        <form className="search-form">
        <input type="text" value={cityName} onChange={(e) => {setCityName(e.target.value)}} placeholder='Enter City Name' />
        <button type="submit" className="search-button"><FaSearch /></button>
        </form>
    </div>
  );
}

export default SearchComponent;