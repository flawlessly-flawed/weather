import React from 'react'
import Navbar from './components/Navbar'
import  Header from './components/Header'
import Dashboard from './components/Dashboard'
import WeatherDashboard from './components/WeatherDashboard'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
     
     < Header/>
     < Dashboard/>
     < WeatherDashboard/>
     
    </div>
  )
}

export default App
