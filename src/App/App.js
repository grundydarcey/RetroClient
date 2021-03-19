import React, { Component } from 'react';
import './App.css';
import Solar from '../Images/SolarSystem.png';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landingpage';
import PlanetContext from '../PlanetContext';
import config from '../config';
import Header from '../Header/header';
import CheckDates from '../CheckDates/checkdates';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      //submittedFutureReport: false,
      submittedDate: [],
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
    
  handleDateSubmission = (date) => {
    this.setState({ submittedDate: date })
  }

  handleClearDate = () => {
    this.setState({ submittedDate : [] })
  }

  render() {
    const value = {
      planets: this.state.planets,
      //submittedFutureReport: this.state.submittedFutureReport,
      //handleReportSubmission: this.handleReportSubmission,
      submittedDate: this.state.submittedDate,
      handleDateSubmission: this.handleDateSubmission,
      handleClearDate: this.handleClearDate,
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
        </main>
      </PlanetContext.Provider>
    );
  }
}