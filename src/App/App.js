import React from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';

function App() {
  return (
    <main className='App'>
      <p>RETRODATE</p>
      <img src={Solar} alt='solarsystem' className='solarSystem'></img>
    </main>
  );
}

export default App;