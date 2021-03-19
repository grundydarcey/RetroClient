import React, { Component, useState } from 'react';
import './checkdates.css';
import DatePicker from 'react-datepicker';

export default class CheckDates extends Component {
  constructor(props) {
    super(props)
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    )
  }

  handleDateSelect() {
    console.log('selected')
  }

  handleDateChange() {
    console.log('changed')
  }

    render() {
    return (
      <section className='futuredates'>
        <h2>Check future dates</h2>
        <form>
          <fieldset>
            <legend>Check future dates</legend>
            <p>"By failing to prepare, you are preparing to fail." - Benjamin Franklin</p>
            <p>You really can't be too prepared or too in-the-know about your plans for the future. If you'll be outside all day, you're always better off checking the weather first. If you're planning a wedding, you'd want to know if a huge city-wide celebration was happening in the meantime.</p>
            <p>Different planets in retrograde can impact different parts of our lives, like romance, career, self-care and mental health. So use the tool beneath to enter a date in the future to get a personalized report for the status of the planets for that day.</p>
            <DatePicker
              selected={date}
              onSelect={this.handleDateSelect}
              onChange={this.handleDateChange}
            />
          </fieldset>
        </form>
      </section>
    )
  }
}