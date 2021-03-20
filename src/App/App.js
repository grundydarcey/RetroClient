import React, { Component } from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landingpage';
import PlanetContext from '../PlanetContext';
import config from '../config';
import Header from '../Header/header';
import CheckDates from '../CheckDates/checkdates';
import Today from '../Today/today';
import PlanetGuide from '../PlanetGuide/planetguide';

export default class App extends Component {
  //controls adding things into context via app
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      submittedDate: [],
    }
  }
  static contextType = PlanetContext;

  //fetches planet information like name and dates of retrogrades
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
      //adds planets into context by way of this.state
      this.setState({ planets: res })
    })
    .catch((error) => {
      console.error({ error })
    })
  }
  
  //changes empty array to currently selected date in date selector component
  handleDateSubmission = (date) => {
    this.setState({ submittedDate: date })
  }

  render() {
    //supplies context to all components within routes below
    const value = {
      planets: this.state.planets,
      submittedDate: this.state.submittedDate,
      handleDateSubmission: this.handleDateSubmission,
    }
    return (
      <PlanetContext.Provider value={value}>
        <main className='App'>
          <Header />
          <hr className='line' />
          <h1>RETRODATE</h1>
          <img src={Solar} alt='solarsystem' className='solarSystem'></img>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/checkdates' component={CheckDates} />
          <Route exact path='/today' component={Today} />
          <Route exact path='/planetguide' component={PlanetGuide} />
        </main>
      </PlanetContext.Provider>
    );
  }
}