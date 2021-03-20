import React from 'react';
import './planetguide.css';
//import PlanetContext from '../PlanetContext';

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }
    
  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }
  
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const question = this.props.details;
    return (
      <div className={activeClass} onClick={this.toggle}>
        <span className="summary">{question.summary}</span>
        <span className="folding-pannel answer">{question.answer}</span>
      </div>
    );
  }
}
  
export default class PlanetGuide extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: sampleQuestions,
    };
    this.renderQuestion = this.renderQuestion.bind(this);
  }
    
  renderQuestion(key) {
    return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
  }

    
  render() {
   

    return(
      <div>
        <p className='guide'>Interact with the individual planets below to see their upcoming periods of retrograde. This website has dates for all of the retrogrades occurring in the next five years.</p><br /><br />
        <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
      </div>    
    )
  }
}


const sampleQuestions = {
    question1: {summary:'Mercury', answer:`Retrograde is between and `},
    question2: {summary:'Venus', answer:'Retrograde is between and'},
    question3: {summary:'Mars', answer:'Retrograde is between and'},
    question4: {summary:'Jupiter', answer:'Retrograde is between and'},
    question5: {summary:'Saturn', answer:'Retrograde is between and'},
    question6: {summary:'Uranus', answer:'Retrograde is between and'},
    question7: {summary:'Neptune', answer:'Retrograde is between and'},
    question8: {summary:'Pluto', answer:'Retrograde is between and'}
  };