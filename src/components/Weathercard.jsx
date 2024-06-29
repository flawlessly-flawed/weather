import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-lg">Temp: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p className="text-lg">Humidity: {weather.main.humidity}%</p>
      <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;

