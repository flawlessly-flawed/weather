
import React, { useState, useEffect } from 'react';
import WeatherCard from './Weathercard';
import Sidebar from './Sidebar';
import { getWeather } from './WeatherService';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('New York');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(city);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-dashboard">
     
      <div className="content">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default WeatherDashboard;
