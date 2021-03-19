import React, { Component } from 'react';
import './today.css';
import Mercury from '../Images/mercury.png';
import Jupiter from '../Images/jupiter.png';
import Mars from '../Images/mars.png';
import Neptune from '../Images/neptune.png';
import Pluto from '../Images/pluto.png';
import Saturn from '../Images/saturn.png';
import Uranus from '../Images/uranus.png';
import Venus from '../Images/venus.png';
import PlanetContext from '../PlanetContext';
import moment from 'moment';

export default class Today extends Component {
  static contextType = PlanetContext;
  render() {
    const planetCheck = this.context.planets;
    const MercuryCheck = (moment(new Date()).isBetween(planetCheck[0].next_enter_date, planetCheck[0].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].second_enter_date, planetCheck[0].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].third_enter_date, planetCheck[0].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].fourth_enter_date, planetCheck[0].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].fifth_enter_date, planetCheck[0].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].sixth_enter_date, planetCheck[0].sixth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].seventh_enter_date, planetCheck[0].seventh_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].eighth_enter_date, planetCheck[0].eighth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].ninth_enter_date, planetCheck[0].ninth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].tenth_enter_date, planetCheck[0].tenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].eleventh_enter_date, planetCheck[0].eleventh_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].twelfth_enter_date, planetCheck[0].twelfth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].thirteenth_enter_date, planetCheck[0].thirteenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].fourteenth_enter_date, planetCheck[0].fourteenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].fifteenth_enter_date, planetCheck[0].fifteenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].sixteenth_enter_date, planetCheck[0].sixteenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].seventeenth_enter_date, planetCheck[0].seventeenth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[0].eighteenth_enter_date, planetCheck[0].eighteenth_exit_date)
    ) ? (
      <p>Mercury is currently in retrograde</p>
    ) : (
      <p>Mercury is currently not in retrograde</p>
    )

    const VenusCheck = (
        moment(new Date()).isBetween(planetCheck[1].next_enter_date, planetCheck[1].next_exit_date) ||
        moment(new Date()).isBetween(planetCheck[1].second_enter_date, planetCheck[1].second_exit_date) ||
        moment(new Date()).isBetween(planetCheck[1].third_enter_date, planetCheck[1].third_exit_date) ||
        moment(new Date()).isBetween(planetCheck[1].fourth_enter_date, planetCheck[1].fourth_exit_date)   
    ) ? (
      <p>Venus is currently in retrograde</p>
    ) : (
      <p>Venus is currently not in retrograde</p>
    )

    const MarsCheck = (moment(new Date()).isBetween(planetCheck[2].next_enter_date, planetCheck[2].next_exit_date) ||
      moment(new Date()).isBetween(planetCheck[2].second_enter_date, planetCheck[2].second_exit_date)
    ) ? (
      <p>Mars is currently in retrograde</p>
    ) : (
      <p>Mars is currently not in retrograde</p>
    )

    const JupiterCheck = (moment(new Date()).isBetween(planetCheck[3].next_enter_date, planetCheck[3].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[3].second_enter_date, planetCheck[3].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[3].third_enter_date, planetCheck[3].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[3].fourth_enter_date, planetCheck[3].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[3].fifth_enter_date, planetCheck[3].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[3].sixth_enter_date, planetCheck[3].sixth_exit_date)
    ) ? (
      <p>Jupiter is currently in retrograde</p>
    ) : (
      <p>Jupiter is currently not in retrograde</p>
    )

    const SaturnCheck = (moment(new Date()).isBetween(planetCheck[4].next_enter_date, planetCheck[4].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[4].second_enter_date, planetCheck[4].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[4].third_enter_date, planetCheck[4].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[4].fourth_enter_date, planetCheck[4].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[4].fifth_enter_date, planetCheck[4].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[4].sixth_enter_date, planetCheck[4].sixth_exit_date)

    ) ? (
      <p>Saturn is currently in retrograde</p>
    ) : (
      <p>Saturn is currently not in retrograde</p>
    )

    const UranusCheck = (moment(new Date()).isBetween(planetCheck[5].next_enter_date, planetCheck[5].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[5].second_enter_date, planetCheck[5].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[5].third_enter_date, planetCheck[5].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[5].fourth_enter_date, planetCheck[5].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[5].fifth_enter_date, planetCheck[5].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[5].sixth_enter_date, planetCheck[5].sixth_exit_date)
    ) ? (
      <p>Uranus is currently in retrograde</p>
    ) : (
      <p>Uranus is currently not in retrograde</p>
    )

    const NeptuneCheck = (moment(new Date()).isBetween(planetCheck[6].next_enter_date, planetCheck[6].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[6].second_enter_date, planetCheck[6].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[6].third_enter_date, planetCheck[6].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[6].fourth_enter_date, planetCheck[6].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[6].fifth_enter_date, planetCheck[6].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[6].sixth_enter_date, planetCheck[6].sixth_exit_date)

    ) ? (
      <p>Neptune is currently in retrograde</p>
    ) : (
      <p>Neptune is currently not in retrograde</p>
    )

    const PlutoCheck = (moment(new Date()).isBetween(planetCheck[7].next_enter_date, planetCheck[7].next_exit_date) ||
    moment(new Date()).isBetween(planetCheck[7].second_enter_date, planetCheck[7].second_exit_date) ||
    moment(new Date()).isBetween(planetCheck[7].third_enter_date, planetCheck[7].third_exit_date) ||
    moment(new Date()).isBetween(planetCheck[7].fourth_enter_date, planetCheck[7].fourth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[7].fifth_enter_date, planetCheck[7].fifth_exit_date) ||
    moment(new Date()).isBetween(planetCheck[7].sixth_enter_date, planetCheck[7].sixth_exit_date)

    ) ? (
      <p>Pluto is currently in retrograde</p>
    ) : (
      <p>Plutois currently not in retrograde</p>
    )

    return (
      <section className='todaysreport'>
        <h2>Current Retrograde Report</h2>
        <p className='today'>Feel free to keep this page as a constant bookmark to reference. This page serves to show all of the planets in our solar system and their current positions related to retrograde throughout space. Scroll down to see the up-to-date report on planets in retrograde.</p>
        <section className='planetcontainer'>
          <section className='left'>
            <section className='mercuryflex'>
              <section className='image'>
                <img src={Mercury} alt='mercury' className='planet'></img>
              </section>
              <section className='text'>
                {MercuryCheck}
              </section>
            </section>
            <section className='venusflex'>
              <section className='text'>
                {VenusCheck}
              </section>
              <section className='image'>
                <img src={Venus} alt='venus' className='planet'></img>         
              </section>
            </section>
            <section className='marsflex'>
              <section className='image'>
                <img src={Mars} alt='mars' className='planet'></img>
              </section>
              <section className='text'>
                {MarsCheck}
              </section>
            </section>
            <section className='jupiterflex'>
              <section className='text'>
                {JupiterCheck}
              </section>
              <section className='image'>
                <img src={Jupiter} alt='jupiter' className='planet'></img>         
              </section>
            </section>
          </section><hr />
          <section className='right'>
            <section className='saturnflex'>
              <section className='image'>
                <img src={Saturn} alt='saturn' className='planet'></img>
              </section>
              <section className='text'>
                {SaturnCheck}
              </section>
            </section>
            <section className='uranusflex'>
              <section className='text'>
                {UranusCheck}
              </section>
              <section className='image'>
                <img src={Uranus} alt='uranus' className='planet'></img>         
              </section>
            </section>
            <section className='neptuneflex'>
              <section className='image'>
                <img src={Neptune} alt='neptune' className='planet'></img>
              </section>
              <section className='text'>
                {NeptuneCheck}
              </section>
            </section>
            <section className='plutoflex'>
              <section className='text'>
                {PlutoCheck}
              </section>
              <section className='image'>
                <img src={Pluto} alt='pluto' className='planet'></img>         
              </section>
            </section>
          </section>
        </section>
      </section>
    )
  }
}