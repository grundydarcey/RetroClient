import React from 'react';
import './landingpage.css';
//import PlanetAPIService from '../planet-api-service';
//import PlanetContext from '../PlanetContext';
//import config from '../config';

export default class LandingPage extends React.Component {
  

//  componentDidMount() {
//    PlanetAPIService.getAllPlanets()
//      .then(res => {
//        this.context.setPlanets(res.planets);
//      })
//  }


  render() {
    console.log(this.context)
  
    return (
      <section className='landing'>
        <p>It's a big world out there. Just because things go in their typical fashion here on Earth, doesn't mean they do on other planets. It's everyday we hear that some other planet is in retrograde.</p>
       
      </section>
    )
  }
}