import React from 'react';
import './planetguide.css';
import PlanetContext from '../PlanetContext';

export default class PlanetGuide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mercuryActive: false,
      venusActive: false,
      marsActive: false,
      jupiterActive: false,
      saturnActive: false,
      uranusActive: false,
      neptuneActive: false,
      plutoActive: false,
    }
    this.mercuryToggle = this.mercuryToggle.bind(this);
    this.venusToggle = this.venusToggle.bind(this);
    this.marsToggle = this.marsToggle.bind(this);
    this.jupiterToggle = this.jupiterToggle.bind(this);
    this.saturnToggle = this.saturnToggle.bind(this);
    this.uranusToggle = this.uranusToggle.bind(this);
    this.neptuneToggle = this.neptuneToggle.bind(this);
    this.plutoToggle = this.plutoToggle.bind(this);
  }

  static contextType = PlanetContext;

  mercuryToggle() {
    this.setState({ mercuryActive: !this.state.mercuryActive });
  }

  venusToggle() {
    this.setState({ venusActive: !this.state.venusActive })
  }

  marsToggle() {
    this.setState({ marsActive: !this.state.marsActive })
  }

  jupiterToggle() {
    this.setState({ jupiterActive: !this.state.jupiterActive })
  }

  saturnToggle() {
    this.setState({ saturnActive: !this.state.saturnActive })
  }

  uranusToggle() {
    this.setState({ uranusActive: !this.state.uranusActive })
  }

  neptuneToggle() {
    this.setState({ neptuneActive: !this.state.neptuneActive })
  }

  plutoToggle() {
    this.setState({ plutoActive: !this.state.plutoActive })
  }

  render() {
    const mercuryActiveClass = this.state.mercuryActive ? "mercuryactive" : "inactive";
    const venusActiveClass = this.state.venusActive ? "venusactive" : "inactive";
    const marsActiveClass = this.state.marsActive ? "marsactive" : "inactive";
    const jupiterActiveClass = this.state.jupiterActive ? "jupiteractive" : "inactive";
    const saturnActiveClass = this.state.saturnActive ? "saturnactive" : "inactive";
    const uranusActiveClass = this.state.uranusActive ? "uranusactive" : "inactive";
    const neptuneActiveClass = this.state.neptuneActive ? "neptuneactive" : "inactive";
    const plutoActiveClass = this.state.plutoActive ? "plutoactive" : "inactive";
    const planetDate = this.context.planets;
    const dateFunction = (day) => {
      const newDate = new Date(day);
      const newTry = (newDate.toDateString());
      return newTry;
    }
    return (
        <div className='wrapper'>
          <p className='guidefont'>Click on any planet name listed below to get an idea of its' upcoming retrogrades. Dates are listed for the next five years.</p>
          <div className={mercuryActiveClass} onClick={this.mercuryToggle}>
            <div className="summary">Mercury</div>
            <div className="folding-pannel" id='mercurytab'><p>Retrogrades run from:<br />{dateFunction(planetDate[0].next_enter_date)} to {dateFunction(planetDate[0].next_exit_date)}<br />
            {dateFunction(planetDate[0].second_enter_date)} to {dateFunction(planetDate[0].second_exit_date)}<br />
            {dateFunction(planetDate[0].third_enter_date)} to {dateFunction(planetDate[0].third_exit_date)}<br />
            {dateFunction(planetDate[0].fourth_enter_date)} to {dateFunction(planetDate[0].fourth_exit_date)}<br />
            {dateFunction(planetDate[0].fifth_enter_date)} to {dateFunction(planetDate[0].fifth_exit_date)}<br />
            {dateFunction(planetDate[0].sixth_enter_date)} to {dateFunction(planetDate[0].sixth_exit_date)}<br />
            {dateFunction(planetDate[0].seventh_enter_date)} to {dateFunction(planetDate[0].seventh_exit_date)}<br />
            {dateFunction(planetDate[0].eighth_enter_date)} to {dateFunction(planetDate[0].eighth_exit_date)}<br />
            {dateFunction(planetDate[0].ninth_enter_date)} to {dateFunction(planetDate[0].ninth_exit_date)}<br />
            {dateFunction(planetDate[0].tenth_enter_date)} to {dateFunction(planetDate[0].tenth_exit_date)}<br />
            {dateFunction(planetDate[0].eleventh_enter_date)} to {dateFunction(planetDate[0].eleventh_exit_date)}<br />
            {dateFunction(planetDate[0].twelfth_enter_date)} to {dateFunction(planetDate[0].twelfth_exit_date)}<br />
            {dateFunction(planetDate[0].thirteenth_enter_date)} to {dateFunction(planetDate[0].thirteenth_exit_date)}<br />
            {dateFunction(planetDate[0].fourteenth_enter_date)} to {dateFunction(planetDate[0].fourteenth_exit_date)}<br />
            {dateFunction(planetDate[0].fifteenth_enter_date)} to {dateFunction(planetDate[0].fifteenth_exit_date)}<br />
            {dateFunction(planetDate[0].sixteenth_enter_date)} to {dateFunction(planetDate[0].sixteenth_exit_date)}<br />
            {dateFunction(planetDate[0].seventeenth_enter_date)} to {dateFunction(planetDate[0].seventeenth_exit_date)}<br />
            {dateFunction(planetDate[0].eighteenth_enter_date)} to {dateFunction(planetDate[0].eighteenth_exit_date)}<br />
            </p></div>
          </div>
          <div className={venusActiveClass} onClick={this.venusToggle}>
            <div className="summary">Venus</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />
            {dateFunction(planetDate[1].next_enter_date)} to {dateFunction(planetDate[1].next_exit_date)}<br />
            {dateFunction(planetDate[1].second_enter_date)} to {dateFunction(planetDate[1].second_exit_date)}<br />
            {dateFunction(planetDate[1].third_enter_date)} to {dateFunction(planetDate[1].third_exit_date)}<br />
            {dateFunction(planetDate[1].fourth_enter_date)} to {dateFunction(planetDate[1].fourth_exit_date)}
            </p></div>
          </div>
          <div className={marsActiveClass} onClick={this.marsToggle}>
            <div className="summary">Mars</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />
            {dateFunction(planetDate[2].next_enter_date)} to {dateFunction(planetDate[2].next_exit_date)}<br />
            {dateFunction(planetDate[2].second_enter_date)} to {dateFunction(planetDate[2].second_exit_date)}</p></div>
           </div>
          <div className={jupiterActiveClass} onClick={this.jupiterToggle}>
            <div className="summary">Jupiter</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />{dateFunction(planetDate[3].next_enter_date)} to {dateFunction(planetDate[3].next_exit_date)}<br />
            {dateFunction(planetDate[3].second_enter_date)} to {dateFunction(planetDate[3].second_exit_date)}<br />
            {dateFunction(planetDate[3].third_enter_date)} to {dateFunction(planetDate[3].third_exit_date)}<br />
            {dateFunction(planetDate[3].fourth_enter_date)} to {dateFunction(planetDate[3].fourth_exit_date)}<br />
            {dateFunction(planetDate[3].fifth_enter_date)} to {dateFunction(planetDate[3].fifth_exit_date)}<br />
            {dateFunction(planetDate[3].sixth_enter_date)} to {dateFunction(planetDate[3].sixth_exit_date)}</p></div>
          </div>
          <div className={saturnActiveClass} onClick={this.saturnToggle}>
            <div className="summary">Saturn</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />{dateFunction(planetDate[4].next_enter_date)} to {dateFunction(planetDate[4].next_exit_date)}<br />
            {dateFunction(planetDate[4].second_enter_date)} to {dateFunction(planetDate[4].second_exit_date)}<br />
            {dateFunction(planetDate[4].third_enter_date)} to {dateFunction(planetDate[4].third_exit_date)}<br />
            {dateFunction(planetDate[4].fourth_enter_date)} to {dateFunction(planetDate[4].fourth_exit_date)}<br />
            {dateFunction(planetDate[4].fifth_enter_date)} to {dateFunction(planetDate[4].fifth_exit_date)}<br />
            {dateFunction(planetDate[4].sixth_enter_date)} to {dateFunction(planetDate[4].sixth_exit_date)}</p></div>
          </div>
          <div className={uranusActiveClass} onClick={this.uranusToggle}>
            <div className="summary">Uranus</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />{dateFunction(planetDate[5].next_enter_date)} to {dateFunction(planetDate[5].next_exit_date)}<br />
            {dateFunction(planetDate[5].second_enter_date)} to {dateFunction(planetDate[5].second_exit_date)}<br />
            {dateFunction(planetDate[5].third_enter_date)} to {dateFunction(planetDate[5].third_exit_date)}<br />
            {dateFunction(planetDate[5].fourth_enter_date)} to {dateFunction(planetDate[5].fourth_exit_date)}<br />
            {dateFunction(planetDate[5].fifth_enter_date)} to {dateFunction(planetDate[5].fifth_exit_date)}<br />
            {dateFunction(planetDate[5].sixth_enter_date)} to {dateFunction(planetDate[5].sixth_exit_date)}</p></div>
          </div>
          <div className={neptuneActiveClass} onClick={this.neptuneToggle}>
            <div className="summary">Neptune</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />{dateFunction(planetDate[6].next_enter_date)} to {dateFunction(planetDate[6].next_exit_date)}<br />
            {dateFunction(planetDate[6].second_enter_date)} to {dateFunction(planetDate[6].second_exit_date)}<br />
            {dateFunction(planetDate[6].third_enter_date)} to {dateFunction(planetDate[6].third_exit_date)}<br />
            {dateFunction(planetDate[6].fourth_enter_date)} to {dateFunction(planetDate[6].fourth_exit_date)}<br />
            {dateFunction(planetDate[6].fifth_enter_date)} to {dateFunction(planetDate[6].fifth_exit_date)}<br />
            {dateFunction(planetDate[6].sixth_enter_date)} to {dateFunction(planetDate[6].sixth_exit_date)}</p></div>
          </div>
          <div className={plutoActiveClass} onClick={this.plutoToggle}>
            <div className="summary">Pluto</div>
            <div className="folding-pannel"><p>Retrogrades run from:<br />{dateFunction(planetDate[7].next_enter_date)} to {dateFunction(planetDate[7].next_exit_date)}<br />
            {dateFunction(planetDate[7].second_enter_date)} to {dateFunction(planetDate[7].second_exit_date)}<br />
            {dateFunction(planetDate[7].third_enter_date)} to {dateFunction(planetDate[7].third_exit_date)}<br />
            {dateFunction(planetDate[7].fourth_enter_date)} to {dateFunction(planetDate[7].fourth_exit_date)}<br />
            {dateFunction(planetDate[7].fifth_enter_date)} to {dateFunction(planetDate[7].fifth_exit_date)}<br />
            {dateFunction(planetDate[7].sixth_enter_date)} to {dateFunction(planetDate[7].sixth_exit_date)}</p></div>
          </div>	
      </div>
    )
  }
}