import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Weather App</h2>
      </div>
      <div className="sidebar-menu">
        <a href="#">Dashboard</a>
        <a href="#">Weekly</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
