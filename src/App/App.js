import React, { Component } from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landingpage';
import PlanetContext from '../PlanetContext';
import config from '../config';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
    }
  }
  static contextType = PlanetContext;

  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/planets`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) 
        return res.json();
    })
    .then((planets) => {
      this.setState({ planets })
      console.log(planets)
    })
    //.then(res => res.text())
    //.then(text => console.log(text))
    .catch((error) => {
      console.error({ error });
    })
    console.log(this.state.planets)

  }
    
  render() {
    const value = {
      planets: this.state.planets,
    }
  
    return (
      <PlanetContext.Provider value={value}>
        <main className='App'>
          <p>RETRODATE</p>
          <img src={Solar} alt='solarsystem' className='solarSystem'></img>
          <Route exact path='/' component={LandingPage} />
        </main>
      </PlanetContext.Provider>
    );
  }
}