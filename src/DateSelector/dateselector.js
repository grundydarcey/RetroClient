import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
//import moment from 'moment';
import PlanetContext from '../PlanetContext';
import "react-datepicker/dist/react-datepicker.css";
import './dateselector.css';
import moment from 'moment';

export default function DateSelector() {
  const planet = useContext(PlanetContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date)
    console.log(date)
    planet.handleDateSubmission(date);
    console.log(planet)
    console.log(planet.planets)
    //planet.handleClearDate();
  }
  
   const checkFirstPlanet = () => {
    if (moment(planet.submittedDate).isBetween(planet.planets[0].next_enter_date, planet.planets[0].next_exit_date)) {
      return <p>Mercury is in retrograde</p> 
    } else {
      return <p>Mercury is not in retrograde</p>
    }
  }

  const Report = () => {
    if (planet.submittedDate.length !== 0) {
      return <section className='report'>
        {checkFirstPlanet()}

        <div className='container'>
          {planet.planets.map((data, key) => {
            return <div key={key}>{data.next_enter_date}</div>;
          })}
        </div>
        {(planet.submittedDate).toISOString()}
      </section>
    } 
    console.log(planet.planets[0].next_enter_date)
    return <p>Select a date</p>
    
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