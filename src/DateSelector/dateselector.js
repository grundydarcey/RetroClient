import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
//import moment from 'moment';
import PlanetContext from '../PlanetContext';
import "react-datepicker/dist/react-datepicker.css";

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
  
  const Report = () => {
    if (planet.submittedDate.length !== 0) {
      return <p>Report Time</p>
    } 
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