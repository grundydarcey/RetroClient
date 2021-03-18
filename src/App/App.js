import React from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/landingpage';

function App() {
  return (
    <main className='App'>
      <p>RETRODATE</p>
      <img src={Solar} alt='solarsystem' className='solarSystem'></img>
      <Route exact path='/' component={LandingPage} />
    </main>
  );
}

export default App;