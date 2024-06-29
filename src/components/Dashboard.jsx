import React from 'react';
import WeatherService from './WeatherService';

const Dashboard = () => {
  return (
    <div className="dashboard-container flex">
      <Sidebar />
      <main className="main-content flex-grow p-4">
        <WeatherService />
      </main>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar w-64 bg-gray-800 text-white flex flex-col p-4">
      <div className="sidebar-header text-2xl font-bold mb-4">Dashboard</div>
      <nav className="sidebar-nav flex-grow">
        <ul>
          <li className="sidebar-item mb-2">
            <a href="/" className="sidebar-link">Home</a>
          </li>
          <li className="sidebar-item mb-2">
            <a href="/weather" className="sidebar-link">Weather</a>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
