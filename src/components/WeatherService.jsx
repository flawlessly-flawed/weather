import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './Weathercard';

const WeatherService = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'London',
            appid: '52b29abeb4783d1320391276808ecc23',
          },
        });
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="weather-service">
      <WeatherCard weather={weatherData} />
    </div>
  );
};

export default WeatherService;

