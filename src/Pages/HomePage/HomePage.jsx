import React from 'react';
import './HomePage.css';
import NavigationComponent from '../../Components/NavigationComponent/NavigationComponent';
import MainComponent from '../../Components/MainComponent/MainComponent';

const HomePage = () => {
  return (
    <div className="HomePage">
        <NavigationComponent />
        <MainComponent />
    </div>
  );
}

export default HomePage;