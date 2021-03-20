import React from 'react';
import PlanetContext from '../PlanetContext';
import './landingpage.css';

export default class LandingPage extends React.Component {
  static contextType = PlanetContext;

  render() {
    return (
      <section className='landing'>
        <p>It's a big world out there. Just because things go in their typical fashion here on Earth, doesn't mean they do on other planets. It's everyday we hear that some other planet is in retrograde.</p>
        <p>These other planets we share the solar system with can occassionally appear to backtrack on their rotation. This is what is described as entering 'retrograde'. We know these planetary shifts can have effects on us here on Earth.</p>
        <p>Have you ever wanted to quickly and easily see the current retrograde status of the planets around us? Or look at a date in the future and wonder what planets are going what way that day? Visit our links up top to see different features of the website.</p>
      </section>
    )
  }
}