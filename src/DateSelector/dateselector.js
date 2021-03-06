import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import PlanetContext from '../PlanetContext';
import "react-datepicker/dist/react-datepicker.css";
import './dateselector.css';
import moment from 'moment';

export default function DateSelector() {
  const planet = useContext(PlanetContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date)
    planet.handleDateSubmission(date);
  }
  
  //this starts 8 checker functions to determine if date chosen falls in a period of retrograde for each planet
   const checkMercury = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[0].next_enter_date, planet.planets[0].next_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].second_enter_date, planet.planets[0].second_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].third_enter_date, planet.planets[0].third_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].fourth_enter_date, planet.planets[0].fourth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].fifth_enter_date, planet.planets[0].fifth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].sixth_enter_date, planet.planets[0].sixth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].seventh_enter_date, planet.planets[0].seventh_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].eighth_enter_date, planet.planets[0].eighth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].ninth_enter_date, planet.planets[0].ninth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].tenth_enter_date, planet.planets[0].tenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].eleventh_enter_date, planet.planets[0].eleventh_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].twelfth_enter_date, planet.planets[0].twelfth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].thirteenth_enter_date, planet.planets[0].thirteenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].fourteenth_enter_date, planet.planets[0].fourteenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].fifteenth_enter_date, planet.planets[0].fifteenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].sixteenth_enter_date, planet.planets[0].sixteenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].seventeenth_enter_date, planet.planets[0].seventeenth_exit_date) ||
      moment(planet.submittedDate).isBetween(planet.planets[0].eighteenth_enter_date, planet.planets[0].eighteenth_exit_date)
    ) {
      return <p>Mercury will be in retrograde</p> 
    } else {
      return <p>Mercury will not be in retrograde</p>
    }
  }

  const checkVenus = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[1].next_enter_date, planet.planets[1].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[1].second_enter_date, planet.planets[1].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[1].third_enter_date, planet.planets[1].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[1].fourth_enter_date, planet.planets[1].fourth_exit_date)
    ) {
      return <p>Venus will be in retrograde</p>
    } else {
      return <p>Venus will not be in retrograde</p>
    }
  }

  const checkMars = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[2].next_enter_date, planet.planets[2].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[2].second_enter_date, planet.planets[2].second_exit_date)
    ) {
      return <p>Mars will be in retrograde</p>
    } else {
      return <p>Mars will not be in retrograde</p>
    }
  }

  const checkJupiter = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[3].next_enter_date, planet.planets[3].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[3].second_enter_date, planet.planets[3].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[3].third_enter_date, planet.planets[3].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[3].fourth_enter_date, planet.planets[3].fourth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[3].fifth_enter_date, planet.planets[3].fifth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[3].sixth_enter_date, planet.planets[3].sixth_exit_date)
    ) {
      return <p>Jupiter will be in retrograde</p>
    } else {
      return <p>Jupiter will not be in retrograde</p>
    }
  }

  const checkSaturn = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[4].next_enter_date, planet.planets[4].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[4].second_enter_date, planet.planets[4].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[4].third_enter_date, planet.planets[4].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[4].fourth_enter_date, planet.planets[4].fourth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[4].fifth_enter_date, planet.planets[4].fifth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[4].sixth_enter_date, planet.planets[4].sixth_exit_date)
    ) {
      return <p>Saturn will be in retrograde</p>
    } else {
      return <p>Saturn will not be in retrograde</p>
    }
  }

  const checkUranus = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[5].next_enter_date, planet.planets[5].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[5].second_enter_date, planet.planets[5].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[5].third_enter_date, planet.planets[5].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[5].fourth_enter_date, planet.planets[5].fourth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[5].fifth_enter_date, planet.planets[5].fifth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[5].sixth_enter_date, planet.planets[5].sixth_exit_date)
    ) {
      return <p>Uranus will be in retrograde</p>
    } else {
      return <p>Uranus will not be in retrograde</p>
    }
  }

  const checkNeptune = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[6].next_enter_date, planet.planets[6].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[6].second_enter_date, planet.planets[6].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[6].third_enter_date, planet.planets[6].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[6].fourth_enter_date, planet.planets[6].fourth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[6].fifth_enter_date, planet.planets[6].fifth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[6].sixth_enter_date, planet.planets[6].sixth_exit_date)
    ) {
      return <p>Neptune will be in retrograde</p>
    } else {
      return <p>Neptune will not be in retrograde</p>
    }
  }

  const checkPluto = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[7].next_enter_date, planet.planets[7].next_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[7].second_enter_date, planet.planets[7].second_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[7].third_enter_date, planet.planets[7].third_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[7].fourth_enter_date, planet.planets[7].fourth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[7].fifth_enter_date, planet.planets[7].fifth_exit_date) ||
    moment(planet.submittedDate).isBetween(planet.planets[7].sixth_enter_date, planet.planets[7].sixth_exit_date)
    ) {
      return <p>Pluto will be in retrograde</p>
    } else {
      return <p>Pluto will not be in retrograde</p>
    }
  }
  //logs out results if a date has been selected
  const Report = () => {
    if (planet.submittedDate.length !== 0) {
      return <section className='report'>
        {checkMercury()}
        {checkVenus()}
        {checkMars()}
        {checkJupiter()}
        {checkSaturn()}
        {checkUranus()}
        {checkNeptune()}
        {checkPluto()}
      </section>
    }
    return <p>Please select a date</p>
  }
  
  return (
    <section className='datepicker'>
    <DatePicker
      selected={startDate}
      onChange={handleChange}
    />
    {Report()}
    </section>
  )
}