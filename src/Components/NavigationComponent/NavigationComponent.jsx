import React from 'react';
import './NavigationComponent.css';
import { FaCity, FaHome, FaMap, FaSatellite } from "react-icons/fa";


const NavigationComponent = () => {
  return (
    <nav className="NavigationComponent">
        <ul className="nav-container">
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaHome />
                    <h2>Home</h2>
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaCity />
                    <h2>Cities</h2>
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaMap />
                    <h2>Maps</h2>
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaSatellite />
                    <h2>Settings</h2>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default NavigationComponent;