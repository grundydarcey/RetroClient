import React, { Component } from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landingpage';
import PlanetContext from '../PlanetContext';
import config from '../config';
import Header from '../Header/header';

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
    .then(data => {
      return data.json()
    })
    .then(res => {
      console.log(res)
      this.setState({ planets: res })
    })
    .catch((error) => {
      console.error({ error })
    })
  }
    
  render() {
    const value = {
      planets: this.state.planets,
    }
    return (
      <PlanetContext.Provider value={value}>
        <main className='App'>
          <Header />
          <hr className='line' />
          <p>RETRODATE</p>
          <img src={Solar} alt='solarsystem' className='solarSystem'></img>
          <Route exact path='/' component={LandingPage} />
        </main>
      </PlanetContext.Provider>
    );
  }
}